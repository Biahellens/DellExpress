/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Put, Param, Delete, HttpException, HttpStatus} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto, UpdateUserDto } from './user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    try {
      const user = await this.usersService.create(createUserDto);
      return { id: user.id, email: user.email, name: user.name };
    } catch (error) {
      throw new HttpException('Não foi possível criar usuário', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Get()
  async findAll() {
    try {
      const users = await this.usersService.findAll();
      return users;
    } catch (error) {
      throw new HttpException('Não foi possível encontrar usuários', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Post('login')
  async login(@Body() { email, password }: { email: string; password: string }) {
    console.log('Handling login request...');
    try {
      const user = await this.usersService.validateUser(email, password);
      if (user) {
        return { message: 'Sucesso ao realizar login', user };
      } else {
        throw new HttpException('Credenciais Inválidas', HttpStatus.UNAUTHORIZED);
      }
    } catch (error) {
      throw new HttpException('Não foi possível autenticar usuário', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    try {
      const orderId = parseInt(id, 10);
      const user = await this.usersService.findOne(orderId);
      if (!user) {
        throw new HttpException('Usuário não encontrado', HttpStatus.NOT_FOUND);
      }
      return user;
    } catch (error) {
      throw new HttpException('Não foi possível obter o usuário', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    try {
      const orderId = parseInt(id, 10);
      const updatedUser = await this.usersService.update(orderId, updateUserDto);
      if (!updatedUser) {
        throw new HttpException('Usuário não encontrado', HttpStatus.NOT_FOUND);
      }
      return { id: updatedUser.id, email: updatedUser.email, name: updatedUser.name };
    } catch (error) {
      throw new HttpException('Não foi possível atualizar o usuário', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    try {
      const orderId = parseInt(id, 10);
      const deletedUser = await this.usersService.remove(orderId);
      if (!deletedUser) {
        throw new HttpException('Usuário não encontrado', HttpStatus.NOT_FOUND);
      }
      return { message: 'Usuário deletado com sucesso' };
    } catch (error) {
      throw new HttpException('Não foi possível deletar o usuário', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}