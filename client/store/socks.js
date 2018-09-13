import axios from 'axios'

/**
 * ACTION TYPES
 */
const GET_SOCKS = 'GET_SOCKS'
const GET_SOCK = 'GET_SOCK'

/**
 * INITIAL STATE
 */
const defaultSocks = []

/**
 * ACTION CREATORS
 */
export const gotSocks = socks => ({
  type: GET_SOCKS,
  socks
})

export const gotSock = sock => ({
  type: GET_SOCK,
  socks: [...socks, sock]
})

/**
 * THUNK CREATORS
 */

export const fetchAdultSocks = () => async dispatch => {
  try {
    const {data} = await axios.get('/api/socks?isAdult=true')
    dispatch(gotSocks(data))
  } catch (error) {
    // OB/JL: don't just report errors to the "developer", but also consider reporting them to the end user; something like a "toast notification" could be a good default: https://github.com/tomchentw/react-toastr
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
    console.log(id, '!@#$!@#$!@#$!@#$');
    const sock = await axios.get(`/api/socks/:${id}`);
    dispatch(gotSock(sock));
  } catch (error) {
    console.error(error);
  }
}



/**
 * REDUCER
 */

export default function(state = defaultSocks, action) {
  switch (action.type) {
    case GET_SOCKS:
      return action.socks
    case GET_SOCK:
      return [...state, action.sock]
    default:
      return state
  }
}
