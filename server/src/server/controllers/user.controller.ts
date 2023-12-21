import { Controller, Get, Post, Body, Param, Put, BadRequestException, UnauthorizedException } from '@nestjs/common'
import { PrismaService } from '../prisma.service'
import { CreateUserDto, UpdateUserDto } from '../dto/user.dto'
import * as bcrypt from 'bcrypt'

@Controller('users')
export class UserController {
  constructor(private readonly prismaService: PrismaService) {}

  @Get()
  async findAll() {
    return (await this.prismaService.user()).findMany()
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return (await this.prismaService.user()).findUnique({ where: { id: +id } })
  }

  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    const hashedPassword = await bcrypt.hash(createUserDto.password, 10)

    try {
      const userClient = this.prismaService.user()
      const createdUser = await (await userClient).create({
        data: {
          ...createUserDto,
          password: hashedPassword,
        },
      })

      const { password, ...userWithoutPassword } = createdUser
      return userWithoutPassword
    } catch (error) {
      throw new BadRequestException('Erro ao registrar usuário')
    }
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return (await this.prismaService.user()).update({
      where: { id: +id },
      data: updateUserDto,
    })
  }

  @Post('login')
  async login(@Body() { email, password }: { email: string; password: string }) {
    const user = await (await this.prismaService.user()).findUnique({
      where: { email },
      select: { id: true, name: true, email: true, password: true },
    })

    if (!user) {
      throw new UnauthorizedException('Invalid credentials')
    }

    const passwordMatch = await bcrypt.compare(password, user.password)

    if (!passwordMatch) {
      throw new UnauthorizedException('Invalid credentials')
    }

    const { password: _, ...userWithoutPassword } = user
    return userWithoutPassword
  }
}
