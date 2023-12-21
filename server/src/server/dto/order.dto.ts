export class CreateOrderDto {
  customerName: string;
  addressDelivery: string;
  orderStatus: string;

  constructor(customerName: string, addressDelivery: string, orderStatus: string) {
    this.customerName = customerName;
    this.addressDelivery = addressDelivery;
    this.orderStatus = orderStatus;
  }
}

export class UpdateOrderDto {
  customerName?: string;
  addressDelivery?: string;
  orderStatus?: string;

  constructor(customerName?: string, addressDelivery?: string, orderStatus?: string) {
    this.customerName = customerName;
    this.addressDelivery = addressDelivery;
    this.orderStatus = orderStatus;
  }
}
