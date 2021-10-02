import * as types from './AuthTypes'

// Replace action name and update action types
export const actionRequest = () => ({
  type: types.GET_DATA_REQUEST
})

export const actionReceive = (payload) => ({
  type: types.GET_DATA_REQUEST,
  payload
})
