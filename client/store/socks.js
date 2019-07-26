import axios from 'axios'

// ACTION TYPES

const RECEIVE_SOCKS = 'RECEIVE_SOCKS'
const RECEIVE_SOCK = 'RECEIVE_SOCK'

// INITIAL STATE

const defaultSocks = []

// ACTION CREATORS

export const gotSocks = socks => ({type: RECEIVE_SOCKS, socks})
export const gotSock = sock => ({type: RECEIVE_SOCK, sock})

// THUNK CREATORS

export const fetchSocksByCategory = category => async dispatch => {
  try {
    const {data} = await axios.get(`/api/socks/category/${category}`)
    dispatch(gotSocks(data))
  } catch (error) {
    console.error(error)
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
    const {data} = await axios.get(`/api/socks/${id}`)
    dispatch(gotSock(data))
  } catch (error) {
    console.error(error)
  }
}

export const fetchAllSocks = () => async dispatch => {
  try {
    const {data} = await axios.get(`/api/socks/`)
    dispatch(gotSocks(data))
  } catch (error) {
    console.error(error)
  }
}

// REDUCER

export default function(state = defaultSocks, action) {
  switch (action.type) {
    case RECEIVE_SOCKS:
      return action.socks
    case RECEIVE_SOCK:
      const alreadyIn = state.some(sock => sock.id === action.sock.id)
      if (alreadyIn) {
        return state.map(sock => {
          if (sock.id === action.sock.id) {
            return action.sock
          } else {
            return sock
          }
        })
      } else return [...state, action.sock]
    default:
      return state
  }
}
