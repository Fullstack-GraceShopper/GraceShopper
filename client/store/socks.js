import axios from 'axios'

/**
 * ACTION TYPES
 */
const GET_SOCKS = 'GET_SOCKS'

/**
 * INITIAL STATE
 */
const defaultSocks = []

/**
 * ACTION CREATORS
 */
export const getSocks = socks => ({
  type: GET_SOCKS,
  socks
})

/**
 * THUNK CREATORS
 */

export const fetchAdultSocks = () => async dispatch => {
  try {
    const {data} = await axios.get('/api/socks?isAdult=true')
    dispatch(getSocks(data))
  } catch (error) {
    console.error(error)
  }
}

export const fetchKidSocks = () => async dispatch => {
  try {
    const {data} = await axios.get('/api/socks?isAdult=false')
    dispatch(getSocks(data))
  } catch (error) {
    console.error(error)
  }
}

/**
 * REDUCER
 */

export default function(state = defaultSocks, action) {
  switch (action.type) {
    case GET_SOCKS:
      return action.socks
    default:
      return state
  }
}
