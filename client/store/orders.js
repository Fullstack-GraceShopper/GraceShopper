import axios from 'axios'

 // ACTION TYPES

const RECEIVE_ORDER = 'RECEIVE_ORDER'
const GET_OPEN_ORDERS = 'GET_CURRENT_ORDERS'
const GET_ORDER_HISTORY = 'GET_ORDER_HISTORY'

 // INITIAL STATE

const defaultOrders = []


// ACTION CREATORS

export const receiveOrder = order => ({type: RECEIVE_ORDER, order})
export const gotCurrentOrders = orders => ({type: GET_CURRENT_ORDERS, orders})
export const gotOrderHistory = orders => ({type: GET_ORDER_HISTORY, orders})


// THUNK CREATORS

export const postOrder = userId => async dispatch => {
  try { 
    const {data: order} = await axios.post(`/api/orders/${userId}`);
    dispatch(receiveOrder(order))
  } catch (err) {
    console.error(err);
  }
}

export const fetchCurrentOrders = userId => async dispatch => {
  try {
    const {data: orders} = await axios.get(`/api/orders/${userId}`);
    dispatch(gotOrders(orders))
  } catch (err) {
    console.error(err);
  }
}

export const fetchOrderHistory = userId => async dispatch => {
  try {
    const {data: orders} = await axios.get(`/api/orders/${userId}`);
    dispatch(gotOrderHistory(orders))
  } catch (err) {
    console.error(err);
  }
}


// REDUCER

export default function(state = defaultOrders, action) {
  switch (action.type) {
    case RECEIVE_ORDER:
      return [action.order, ...state]
    case GET_CURRENT_ORDERS:
      return action.orders
    case GET_ORDER_HISTORY:
      return action.orders
    default:
      return state
  }
}
