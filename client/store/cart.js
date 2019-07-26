import axios from 'axios'

 // ACTION TYPES

const RECEIVE_CART_ITEM = 'RECEIVE_CART_ITEM'
const RECEIVE_CART = 'RECEIVE_CART'

 // INITIAL STATE

const defaultCart = []


// ACTION CREATORS

export const gotCartItem = cartItem => ({type: RECEIVE_CART_ITEM, cartItem})
//export const gotCart = orders => ({type: RECEIVE_CART, orders})


// THUNK CREATORS

// export const getCurrentOrder = () => async dispatch => {
//   try {
//     const currentCart = await axios.get(`/api/orders/cart`)
//     if (currentCart.data.length > 0) {
//       const {data} = await axios.post(`/api/orders/inCart`, {
//         id: currentCart.data[0].id
//       })
//       dispatch(gotOrder(data))
//     } else {
//       dispatch(gotOrder([]))
//     }
//   } catch (err) {
//     console.log(err)
//   }
// }

export const addCartItem = (sockId, size, quantity) => async dispatch => {
  console.log('adding to cart in store:   ', sockId, size, quantity)
  try {
    const {data: cartItem} = await axios.post(`/api/cart/add?sockId=${sockId}&size=${size}&quantity=${quantity}`)
    console.log('cart data in store after post req:  ', cartItem)
    dispatch(gotCartItem(cartItem))
  } catch (err) {
    console.error(err)
  }
}

// export const removeSockFromOrder = (sockId, userId) => async dispatch => {
//   try {
//     await axios.delete(`/api/orders/removeFromCart?sockId=${sockId}`)
//     dispatch(getCurrentOrder(userId))
//   } catch (err) {
//     console.log(err)
//   }
// }

// export const fetchOrderHistory = userId => async dispatch => {
//   try {
//     const {data: cart} = await axios.get(`/api/cart?userId=${userId}`)
//     dispatch(gotCart(cart))
//   } catch (err) {
//     console.error(err)
//   }
// }


// REDUCER

export default function(state = defaultCart, action) {
  switch (action.type) {
    case RECEIVE_CART_ITEM:
    const alreadyIn = state.some(cartItem => cartItem.id === action.cartItem.id)
      if (alreadyIn) {
        return state.map(cartItem => {
          if (cartItem.id === action.cartItem.id) {
            return action.cartItem
          } else {
            return cartItem
          }
        })
      } else return [...state, action.cartItem]
    // case RECEIVE_CART:
    //   return action.cart
    default:
      return state
  }
}
