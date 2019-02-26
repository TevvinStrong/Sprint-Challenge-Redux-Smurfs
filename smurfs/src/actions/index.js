/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/

import axios from 'axios';

export const ADD_SMURF = 'ADD_SMURF';
export const GET_SMURFS = 'GET_SMURFS';
export const UPDATE_SMURF = 'UPDATE_SMURF';
export const DELETE_SMURF = 'DELETE_SMURF';
export const ERROR = 'ERROR';
export const LOADING = 'LOADING';

/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/

export const getSmurfs = () => dispatch => { // Need to figure out how to send payload of custom error response on a 422 error.
  dispatch({ type: LOADING });
  axios.get('http://localhost:3333/smurfs')
    .then(res => dispatch({ type: GET_SMURFS, payload: res.data }))
    .catch(err => dispatch({ type: ERROR, payload: 'There was an error while retrieving Smurfs.' }));
}

export const addSmurf = smurf => dispatch => {
  dispatch({ type: LOADING });
  axios.post('http://localhost:3333/smurfs', smurf)
    .then(res => console.log(res))
    .catch(err => console.log(err));
}

export const updateSmurf = (id, smurf) => dispatch => {
  dispatch({ type: LOADING });
  axios.put(`http://localhost:3333/smurfs/${id}`, smurf)
    .then(res => dispatch({ type: UPDATE_SMURF, payload: res.data }))
    .catch(err => dispatch({ type: ERROR, payload: 'There was an error while attempting to update Smurf.' }));
}

export const deleteSmurf = (id, smurf) => dispatch => {
  dispatch({ type: LOADING });
  axios.delete(`http://localhost:3333/smurfs/${id}`)
    .then(res => dispatch({ type: DELETE_SMURF, payload: res.data }))
    .catch(err => dispatch({ type: ERROR, payload: 'There was an error while attempting to delete Smurf.' }));
}