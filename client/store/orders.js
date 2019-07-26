import axios from 'axios'

 // ACTION TYPES

const RECEIVE_ORDER = 'RECEIVE_ORDER'
const RECEIVE_ORDER_HISTORY = 'RECEIVE_ORDER_HISTORY'

 // INITIAL STATE

const defaultOrders = []


// ACTION CREATORS

export const gotOrder = order => ({type: RECEIVE_ORDER, order})
export const gotOrderHistory = orders => ({type: RECEIVE_ORDER_HISTORY, orders})


// THUNK CREATORS

export const getCurrentOrder = () => async dispatch => {
  try {
    const currentCart = await axios.get(`/api/orders/cart`)
    if (currentCart.data.length > 0) {
      const {data} = await axios.post(`/api/orders/inCart`, {
        id: currentCart.data[0].id
      })
      dispatch(gotOrder(data))
    } else {
      dispatch(gotOrder([]))
    }
  } catch (err) {
    console.log(err)
  }
}

export const addOrder = (sockId, size, quantity) => async dispatch => {
  try {
    const {data: order} = await axios.post(`/api/orders/addToCart?sockId=${sockId}&size=${size}&quantity=${quantity}`);
    dispatch(gotOrder(order))
  } catch (err) {
    console.error(err);
  }
}

export const removeSockFromOrder = (sockId, userId) => async dispatch => {
  try {
    await axios.delete(`/api/orders/removeFromCart?sockId=${sockId}`)
    dispatch(getCurrentOrder(userId))
  } catch (err) {
    console.log(err)
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
    case RECEIVE_ORDER_HISTORY:
      return action.orders
    default:
      return state
  }
}
