import { Prisma } from '@prisma/client';

export interface Order {
  id: number;
  customerName: string;
  addressDelivery: string;
  orderStatus: string;
}

export interface CreateOrderInput {
  customerName: string;
  addressDelivery: string;
  orderStatus: string;
}

export type UpdateOrderInput = Prisma.OrderUpdateInput;
