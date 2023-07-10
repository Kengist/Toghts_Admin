// eslint-disable-next-line import/no-cycle
import { LOGIN, LOGIN_SUCCESS, LOGIN_ERROR } from '../actions'

export const login = () => ({
  type: LOGIN
})
export const loginSuccess = data => ({
  type: LOGIN_SUCCESS,
  payload: { data }
})
export const loginError = error => ({
  type: LOGIN_ERROR,
  payload: { error }
})
