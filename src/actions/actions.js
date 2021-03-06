import {API} from '../Constants.js'

export const fetchUserActions = (userId) => {
  return dispatch => {
    dispatch({type: 'LOADING'})
    fetch(`${API}/users/${userId}/actions`, {
      method: 'GET',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
        'SameSite': 'None; Secure;',
      }
    })
      .then(resp => resp.json())
      .then(json => {

        if (json && json.length >= 0) {
          dispatch({type: 'SET_USER_ACTIONS', payload: json})
        } else {
          console.log(json)
        }
      })
  }
}

// Action POST request
export const addAction = (action) =>{
  return dispatch => {
    fetch(`${API}/users/${action.user_id}/actions`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(action)
    })
    .then(resp => resp.json())
    .then(json => {
      if (json.id) {
        dispatch({type: 'ADD_ACTION', payload: json})
      } else {
        console.log(json)
      }


    })
  }
}
