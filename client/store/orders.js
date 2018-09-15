import axios from 'axios'

 // ACTION TYPES

const RECEIVE_ORDER = 'RECEIVE_ORDER'
// const GET_ORDERS = 'GET_ORDERS'

 // INITIAL STATE

const defaultOrders = []


// ACTION CREATORS

export const receiveOrder = order => ({type: RECEIVE_ORDER, order})
// export const gotOrders = orders => ({type: GET_ORDERS, orders})


// THUNK CREATORS

export const postOrder = userId => async dispatch => {
  try { 
    const order = await axios.post(`/api/orders/${userId}`);
    dispatch(receiveOrder(order))
  } catch (err) {
    console.error(err);
  }
}

// export const fetchOrders = () => async dispatch => {
//   try { 
//     await axios.get(`/api/orders/${userId}`);
//   } catch (err) {
//     console.error(err);
//   }
// }


// REDUCER

export default function(state = defaultOrders, action) {
  switch (action.type) {
    case RECEIVE_ORDER:
      return [action.order, ...state]
    // case GET_ORDERS:
    //   return action.order
    default:
      return state
  }
}