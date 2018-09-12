import axios from 'axios'

/**
 * ACTION TYPES
 */
const GET_ADULT_SOCKS = 'GET_ADULT_SOCKS'
const GET_KID_SOCKS = 'GET_KID_SOCKS'

/**
 * INITIAL STATE
 */
const defaultSocks = []

/**
 * ACTION CREATORS
 */
export const getAdultSocks = adultSocks => ({
  type: GET_ADULT_SOCKS,
  socks: adultSocks
})

export const getKidSocks = kidSocks => ({
  type: GET_KID_SOCKS,
  socks: kidSocks
})

/**
 * THUNK CREATORS
 */

export const fetchAdultSocks = () => async dispatch => {
  try {
    const {data} = await axios.get('/api/adults')
    dispatch(getAdultSocks(data))
  } catch (error) {
    console.error(error)
  }
}

export const fetchKidSocks = () => async dispatch => {
  try {
    const {data} = await axios.get('/api/kids')
    dispatch(getKidSocks(data))
  } catch (error) {
    console.error(error)
  }
}

/**
 * REDUCER
 */

export default function(state = defaultSocks, action) {
  switch (action.type) {
    case GET_ADULT_SOCKS:
      return action.socks
    case GET_KID_SOCKS:
      return action.socks
    default:
      return state
  }
}
