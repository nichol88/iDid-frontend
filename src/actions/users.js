import {API} from '../Constants.js'

// user sign up form submit
export const createUser = (user) => {
  return dispatch => {
    dispatch({type: 'LOADING'})
    fetch(API + '/users', {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
        'SameSite': 'None; Secure;',
      },
      body: JSON.stringify({user})
    })
      .then(resp => resp.json())
      .then(json => {
        dispatch({type: 'SET_CURRENT_USER', payload: json })
        dispatch({type: 'SET_VALUE', payload: 0})
      })
  }
}
