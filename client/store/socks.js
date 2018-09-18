import axios from 'axios'

 // ACTION TYPES

const GET_SOCKS = 'GET_SOCKS'
const GET_SOCK = 'GET_SOCK'


 // INITIAL STATE

const defaultSocks = []


// ACTION CREATORS

export const gotSocks = socks => ({type: GET_SOCKS, socks})
export const gotSock = sock => ({type: GET_SOCK, sock})


// THUNK CREATORS

export const fetchSocksByCategory = (category) => async dispatch => {
  try {
    const {data} = await axios.get(`/api/socks/category/${category}`)
    dispatch(gotSocks(data))
  } catch (error) {
    console.error(error)
  }
}

export const fetchSocksInCart = (userId) => async dispatch => {
  try{
    const currentCart = await axios.get(`/api/orders/${userId}/cart`)
    const {data} = await axios.get(`/api/orders/inCart/${currentCart.data[0].id}`)
    dispatch(gotSocks(data))
  } catch (err) {
    console.log(err);
  }
}

export const deleteSockInCart = (sockId, userId) => async dispatch => {
  try {
    await axios.delete(`/api/orders/removeFromCart?sockId=${sockId}`)
    dispatch(fetchSocksInCart(userId));
  } catch (err) {
    console.log(err);
  }
}

export const fetchAdultSocks = () => async dispatch => {
  try {
    const {data} = await axios.get('/api/socks?isAdult=true')
    dispatch(gotSocks(data))
  } catch (error) {
    console.error(error)
  }
}

export const fetchKidSocks = () => async dispatch => {
  try {
    const {data} = await axios.get('/api/socks?isAdult=false')
    dispatch(gotSocks(data))
  } catch (error) {
    console.error(error)
  }
}

export const fetchSock = id => async dispatch => {
  try {
    const {data} = await axios.get(`/api/socks/${id}`);
    dispatch(gotSock(data));
  } catch (error) {
    console.error(error);
  }
}

export const fetchAllSocks = () => async dispatch => {
  try {
    const {data} = await axios.get(`/api/socks/`);
    dispatch(gotSocks(data));
  } catch (error) {
    console.error(error);
  }
}

// REDUCER

export default function(state = defaultSocks, action) {
  switch (action.type) {
    case GET_SOCKS:
      return action.socks
    case GET_SOCK:
      const alreadyIn = state.some(sock => sock.id === action.sock.id);
      if (alreadyIn) {
        return state.map(sock => {
          if (sock.id === action.sock.id) {
            return action.sock
          } else {
            return sock
          }
        });
      } else return [...state, action.sock]
    default:
      return state
  }
}
