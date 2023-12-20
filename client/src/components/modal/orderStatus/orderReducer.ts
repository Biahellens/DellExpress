interface OrderState {
  selectedStatus: string
}

interface SetOrderStatusAction {
  type: 'SET_ORDER_STATUS'
  payload: {
    status: string
  }
}

const initialState: OrderState = {
  selectedStatus: '',
}

const orderReducer = (state: OrderState = initialState, action: SetOrderStatusAction) => {
  switch (action.type) {
    case 'SET_ORDER_STATUS':
      return {
        ...state,
        selectedStatus: action.payload.status,
      }
    default:
      return state
  }
}

export default orderReducer
