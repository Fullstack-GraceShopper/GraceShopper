import axios from 'axios'

/**
 * ACTION TYPES
 */
const GET_ALL_SOCKS = 'GET_ALL_SOCKS'


/**
 * INITIAL STATE
 */
const defaultSocks = []

/**
 * ACTION CREATORS
 */
export const getAllSocks = socks => ({
  type: GET_ALL_SOCKS,
  socks
})

/**
 * THUNK CREATORS
 */

export const fetchSocks = () => async dispatch => {
  try {
    const {data} = await axios.get('/api/socks')
    dispatch(getAllSocks(data))
  } catch (error) {
    console.error(error)
  }
}


/**
 * REDUCER
 */
export default function(state = defaultSocks, action) {
  switch (action.type) {
    case GET_ALL_SOCKS:
      return action.socks
    default:
      return state
  }
}
