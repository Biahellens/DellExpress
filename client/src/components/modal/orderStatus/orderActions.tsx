interface SetOrderStatusAction {
  type: 'SET_ORDER_STATUS'
  payload: {
    orderId: number
    status: string
  }
}

export const setOrderStatus = (orderId: number, status: string): SetOrderStatusAction => {
  return {
    type: 'SET_ORDER_STATUS',
    payload: { orderId, status },
  }
}