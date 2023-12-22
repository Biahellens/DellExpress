import axios from 'axios';
import { Dispatch } from 'redux';

export const setOrderStatus = (orderId: number, status: string) => async (dispatch: Dispatch) => {
  try {
    dispatch({
      type: 'SET_ORDER_STATUS',
      payload: { orderId, status },
    });

    await axios.put(`http://localhost:8080/orders/${orderId}/update-status`, { orderStatus: status })
  } catch (error) {
    console.error('Erro ao atualizar o status do pedido:', error);
  }
};
