import axios from 'axios'

 // ACTION TYPES

const RECEIVE_ORDER = 'RECEIVE_ORDER'
const GET_ORDERS = 'GET_ORDERS'

 // INITIAL STATE

const defaultOrders = []


// ACTION CREATORS

export const receiveOrder = order => ({type: RECEIVE_ORDER, order})
export const gotOrderHistory = orders => ({type: GET_ORDERS, orders})


// THUNK CREATORS

export const postOrder = userId => async dispatch => {
  try { 
    // console.log('USER ID IN THUNK:   ',  userId)
    const {data: order} = await axios.post(`/api/orders/${userId}`);
    // console.log('ORDER FROMM THUNK:   ',  order)
    dispatch(receiveOrder(order))
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
    case GET_ORDER_HISTORY:
      return action.orders
    default:
      return state
  }
}
