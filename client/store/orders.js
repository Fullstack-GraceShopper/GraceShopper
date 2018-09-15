import axios from 'axios'

 // ACTION TYPES

const RECEIVE_ORDER = 'RECEIVE_ORDER'
// const GET_ORDERS = 'GET_ORDERS'

 // INITIAL STATE

const defaultOrders = []


// ACTION CREATORS

export const receivedOrder = order => ({type: RECEIVE_ORDER, order})
// export const gotOrders = orders => ({type: GET_ORDERS, orders})


// THUNK CREATORS

export const postOrder = orderId => async dispatch => {
  try { 
    await axios.post(`/api/orders/${orderId}`);
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
      return [...state, action.order]
    // case GET_ORDERS:
    //   return action.order
    default:
      return state
  }
}
