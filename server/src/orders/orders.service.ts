import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { CreateOrderDto, UpdateOrderDto } from './order.dto';

@Injectable()
export class OrdersService {
  constructor(private prisma: PrismaService) {}

  async create(createorderDto: CreateOrderDto) {
    return this.prisma.order.create({
      data: createorderDto,
    });
  }

  async findAll() {
    return this.prisma.order.findMany();
  }

  async findOne(id: number) {
    return this.prisma.order.findUnique({
      where: { id },
    });
  }

  async findByStatus(orderStatus: string) {
    return this.prisma.order.findMany({
      where: { orderStatus },
    });
  }

  async update(id: number, updateorderDto: UpdateOrderDto) {
    return this.prisma.order.update({
      where: { id },
      data: updateorderDto,
    });
  }

  async remove(id: number) {
    return this.prisma.order.delete({
      where: { id },
    });
  }

  async updateStatus(id: number, orderStatus: string) {
    const order = await this.prisma.order.findUnique({
      where: { id },
    });

    if (!order) {
      throw new NotFoundException('Pedido não encontrado');
    }

    return this.prisma.order.update({
      where: { id },
      data: { orderStatus },
    });
  }
}
