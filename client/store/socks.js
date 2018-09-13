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
    // OB/JL: don't just report errors to the "developer", but also consider reporting them to the end user; something like a "toast notification" could be a good default: https://github.com/tomchentw/react-toastr
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
    // OB/JL: notice that these two action types have the same logic, could reuse the exact same action, having two different "execution" traces (e.g. thunks) that dispatch the same action is totally great
    case GET_ADULT_SOCKS:
      return action.socks
    case GET_KID_SOCKS:
      return action.socks
    default:
      return state
  }
}
