/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Put, Param, Delete, HttpException, HttpStatus, NotFoundException } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { CreateOrderDto, UpdateOrderDto } from './order.dto';

@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Post()
  async create(@Body() createOrderDto: CreateOrderDto) {
    try {
      const order = await this.ordersService.create(createOrderDto);
      return { id: order.id, customerName: order.customerName, addressDelivery: order.addressDelivery, orderStatus: order.orderStatus }
    } catch (error) {
      throw new HttpException('Não foi possível criar pedido', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Get()
  async findAll() {
    try {
      const orders = this.ordersService.findAll();
      return orders
    } catch (error) {
      throw new HttpException('Não foi possível encontrar pedidos', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Get('status/:orderStatus')
  async findByStatus(@Param('orderStatus') orderStatus: string) {
    try {
      const orders = await this.ordersService.findByStatus(orderStatus);
      return orders;
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw new HttpException(error.message, HttpStatus.NOT_FOUND);
      } else {
        throw new HttpException('Não foi possível encontrar pedidos com o status especificado', HttpStatus.INTERNAL_SERVER_ERROR);
      }
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    try {
      const orderId = parseInt(id, 10);
      const order = await this.ordersService.findOne(orderId);
      if(!order) {
        throw new HttpException('Pedido não encontrado', HttpStatus.NOT_FOUND);
      }
      return order
    } catch (error) {
      throw new HttpException('Não foi possível obter o pedido', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateOrderDto: UpdateOrderDto) {
    try {
      const orderId = parseInt(id, 10);
      const updateOrder = await this.ordersService.update(orderId, updateOrderDto);
      if(!updateOrder) {
        throw new HttpException('Pedido não encontrado', HttpStatus.NOT_FOUND);
      }
      return { id: updateOrder.id, customerName: updateOrder.customerName, addressDelivery: updateOrder.addressDelivery, orderStatus: updateOrder.orderStatus }
    } catch (error) {
      throw new HttpException('Não foi possível atualizar o pedido', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Put(':id/update-status')
  async updateStatus(@Param('id') id: string, @Body('orderStatus') orderStatus: string) {
    try {
      const orderId = parseInt(id, 10);
      const updateOrderStatus = await this.ordersService.updateStatus(orderId, orderStatus);
      if(!updateOrderStatus) {
        throw new HttpException('Pedido não encontrado', HttpStatus.NOT_FOUND);
      }
      return { id: updateOrderStatus.id, orderStatus: updateOrderStatus.orderStatus}
    } catch (error) {
      throw new HttpException('Não foi possível atualizar o status o pedido', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    try {
      const orderId = parseInt(id, 10);
      const deletedOrder = await this.ordersService.remove(orderId);
      if(!deletedOrder){
        throw new HttpException('Pedido não encontrado', HttpStatus.NOT_FOUND);
      }
      return { message: 'Pedido deletado com sucesso' };
    } catch (error) {
      throw new HttpException('Não foi possível deletar o usuário', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}