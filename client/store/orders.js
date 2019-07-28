import axios from 'axios'

 // ACTION TYPES

const RECEIVE_ORDER = 'RECEIVE_ORDER'
const RECEIVE_ORDERS = 'RECEIVE_ORDERS'

 // INITIAL STATE

const defaultOrders = []


// ACTION CREATORS

export const gotOrder = order => ({type: RECEIVE_ORDER, order})
export const gotOrders = orders => ({type: RECEIVE_ORDERS, orders})


// THUNK CREATORS

export const getOrder = id => async dispatch => {
  try {
    const {data: order} = await axios.get(`/api/orders/${id}`)
    dispatch(gotOrder(order))
  } catch (err) {
    console.log(err)
  }
}

export const getOrders = userId => async dispatch => {
  try {
    const {data: orders} = await axios.get(`/api/orders?userId=${userId}`)
    dispatch(gotOrders(orders))
  } catch (err) {
    console.error(err);
  }
}


// REDUCER

export default function(state = defaultOrders, action) {
  switch (action.type) {
    case RECEIVE_ORDER:
      return action.order
    case RECEIVE_ORDERS:
      return action.orders
    default:
      return state
  }
}
