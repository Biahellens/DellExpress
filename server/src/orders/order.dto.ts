/* eslint-disable prettier/prettier */
export class CreateOrderDto {
  readonly customerName: string;
  readonly addressDelivery: string;
  readonly orderStatus: string;
}

export class UpdateOrderDto {
  readonly customerName?: string;
  readonly addressDelivery?: string;
  readonly orderStatus?: string;
}
