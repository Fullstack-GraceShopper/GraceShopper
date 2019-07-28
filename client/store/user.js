import axios from 'axios'
import history from '../history'

const GET_USER = 'GET_USER'
const REMOVE_USER = 'REMOVE_USER'

const defaultUser = {}

const gotUser = user => ({type: GET_USER, user})
const removeUser = () => ({type: REMOVE_USER})

export const me = () => async dispatch => {
  try {
    const {data} = await axios.get('/auth/me')
    dispatch(gotUser(data || defaultUser))
    return data
  } catch (err) {
    console.error(err)
  }
}

export const getUser = user => dispatch => {
  dispatch(gotUser(user))
}

export const auth = (email, password, method) => async dispatch => {
  let res
  try {
    res = await axios.post(`/auth/${method}`, {email, password})
  } catch (authError) {
    return dispatch(gotUser({error: authError}))
  }

  try {
    dispatch(gotUser(res.data))
    history.push('/')
  } catch (dispatchOrHistoryErr) {
    console.error(dispatchOrHistoryErr)
  }
}

export const signUp = (email, password) => async dispatch => {
  let res
  try {
    res = await axios.post(`/auth/signup`, {email, password})
  } catch (authError) {
    return dispatch(gotUser({error: authError}))
  }
  try {
      console.log('res data:  ', res.data)
    dispatch(gotUser(res.data))
    history.push('/')
  } catch (dispatchOrHistoryErr) {
    console.error(dispatchOrHistoryErr)
  }
}

export const logout = () => async dispatch => {
  try {
    await axios.post('/auth/logout')
    dispatch(removeUser())
    history.push('/login')
  } catch (err) {
    console.error(err)
  }
}

export default function(state = defaultUser, action) {
  switch (action.type) {
    case GET_USER:
      return action.user
    case REMOVE_USER:
      return defaultUser
    default:
      return state
  }
}
