import axios from 'axios'

 // ACTION TYPES

const RECEIVE_CART_ITEM = 'RECEIVE_CART_ITEM'
const RECEIVE_CART = 'RECEIVE_CART'

 // INITIAL STATE

const defaultCart = []


// ACTION CREATORS

export const gotCartItem = cartItem => ({type: RECEIVE_CART_ITEM, cartItem})
export const gotCart = cart => ({type: RECEIVE_CART, cart})

// THUNK CREATORS

export const getCartItems = () => async dispatch => {
  try {
    const currentCart = await axios.get(`/api/cart`)
    if (currentCart.data.length > 0) {
      const {data} = await axios.post(`/api/cart/in`, {
        id: currentCart.data[0].id
      })
      dispatch(gotCart(data))
    } else {
      dispatch(gotCart([]))
    }
  } catch (err) {
    console.log(err)
  }
}

export const addCartItem = (sockId, size, quantity) => async dispatch => {
  try {
    const {data: cartItem} = await axios.post(`/api/cart/add?sockId=${sockId}&size=${size}&quantity=${quantity}`)
    dispatch(gotCartItem(cartItem))
  } catch (err) {
    console.error(err)
  }
}

export const removeCartItem = (sockId, userId) => async dispatch => {
  try {
    await axios.delete(`/api/cart/remove?sockId=${sockId}`)
    dispatch(getCartItems())
  } catch (err) {
    console.log(err)
  }
}

export const clearCartItems = cartId => async dispatch => {
  try {
    await axios.delete(`/api/cart/${cartId}`)
    dispatch(getCartItems())
  } catch(err) {
    console.error(err)
  }
}


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
    case RECEIVE_CART:
      return action.cart
    default:
      return state
  }
}
