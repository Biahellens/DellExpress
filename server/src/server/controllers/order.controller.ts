import { Controller, Get, Post, Body, Param, Put } from '@nestjs/common'
import { PrismaService } from '../prisma.service'


@Controller('orders')
export class OrderController {
  constructor(private readonly prismaService: PrismaService) {}

  @Get()
  async findAll() {
    return this.prismaService.order.findMany()
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.prismaService.order.findUnique({ where: { id: +id } })
  }

  @Get('status/:status')
  async findByStatus(@Param('status') status: string) {
    return this.prismaService.order.findMany({
      where: {
        orderStatus: status,
      },
    })
  }
}
