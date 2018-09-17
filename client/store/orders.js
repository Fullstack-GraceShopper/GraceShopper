import axios from 'axios'

 // ACTION TYPES

const RECEIVE_ORDER = 'RECEIVE_ORDER'
const GET_ORDERS_FOR_CART = 'GET_CURRENT_ORDERS'
const GET_ORDER_HISTORY = 'GET_ORDER_HISTORY'

 // INITIAL STATE

const defaultOrders = []


// ACTION CREATORS

export const receiveOrder = order => ({type: RECEIVE_ORDER, order})
// OB: consider using selectors to filter "history" versus "cart" and have your redux store hold "all orders"
export const gotOrdersForCart = orders => ({type: GET_ORDERS_FOR_CART, orders})
export const gotOrderHistory = orders => ({type: GET_ORDER_HISTORY, orders})


// THUNK CREATORS

export const postOrder = (userId, sockId, size, quantity) => async dispatch => {
  try {
    const {data: order} = await axios.post(`/api/orders/${userId}/${sockId}/${size}/${quantity}`);
    dispatch(receiveOrder(order))
  } catch (err) {
    console.error(err);
  }
}

export const fetchOrdersForCart = userId => async dispatch => {
  try {
    const {data: orders} = await axios.get(`/api/orders/${userId}`);
    dispatch(gotOrdersForCart(orders))
  } catch (err) {
    console.error(err);
  }
}

export const fetchOrderHistory = userId => async dispatch => {
  try {
    const {data: orders} = await axios.get(`/api/orders/${userId}/order-history`);
    dispatch(gotOrderHistory(orders))
  } catch (err) {
    console.error(err);
  }
}


// REDUCER

export default function(state = defaultOrders, action) {
  switch (action.type) {
    case RECEIVE_ORDER:
      // OB: could lead to bugs where the same order ends up in the array multiple times
      return [action.order, ...state]
    case GET_ORDERS_FOR_CART:
      return action.orders
    // OB: duplicate action type behavior
    case GET_ORDER_HISTORY:
      return action.orders
    default:
      return state
  }
}
