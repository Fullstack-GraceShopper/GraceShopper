import axios from 'axios'

 // ACTION TYPES

const RECEIVE_ORDER = 'RECEIVE_ORDER'
const GET_ORDER_HISTORY = 'GET_ORDER_HISTORY'

 // INITIAL STATE

const defaultOrders = []


// ACTION CREATORS

export const receiveOrder = order => ({type: RECEIVE_ORDER, order})
export const gotOrderHistory = orders => ({type: GET_ORDER_HISTORY, orders})


// THUNK CREATORS

export const postOrder = (sockId, size, quantity) => async dispatch => {
  try {
    const {data: order} = await axios.post(`/api/orders/addToCart?sockId=${sockId}&size=${size}&quantity=${quantity}`);
    dispatch(receiveOrder(order))
  } catch (err) {
    console.error(err);
  }
}

export const fetchOrderHistory = userId => async dispatch => {
  try {
    const {data: orders} = await axios.get(`/api/orders?userId=${userId}`);
    dispatch(gotOrderHistory(orders))
  } catch (err) {
    console.error(err);
  }
}


// REDUCER

export default function(state = defaultOrders, action) {
  switch (action.type) {
    case RECEIVE_ORDER:
    const alreadyIn = state.some(order => order.id === action.order.id);
      if (alreadyIn) {
        return state.map(order => {
          if (order.id === action.order.id) {
            return action.order
          } else {
            return order
          }
        });
      } else return [...state, action.order]
    case GET_ORDER_HISTORY:
      return action.orders
    default:
      return state
  }
}
