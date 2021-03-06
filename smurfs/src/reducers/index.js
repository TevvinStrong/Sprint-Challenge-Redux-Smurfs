/*
  Be sure to import in all of the action types from `../actions`
*/

import { ADD_SMURF, GET_SMURFS, DELETE_SMURF, UPDATE_SMURF, LOADING, ERROR } from '../actions';

/*
 Your initial/default state for this project could *Although does not have to* look a lot like this
 {
   smurfs: [],
   fetchingSmurfs: false
   addingSmurf: false
   updatingSmurf: false
   deletingSmurf: false
   error: null
 }
*/

const myInitialState = {
  smurfs: [],
  loading: false,
  error: null
}

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/

export default (state = myInitialState, action) => {
  switch (action.type) {
    case LOADING:
      return { ...state, loading: true };
    case GET_SMURFS:
      return { ...state, loading: false, error: null, smurfs: action.payload };
    case ADD_SMURF:
      return { ...state, loading: false, error: null, smurfs: action.payload };
    case UPDATE_SMURF:
      return { ...state, loading: false, error: null, smurfs: action.payload };
    case DELETE_SMURF:
      return { ...state, loading: false, error: null, smurfs: action.payload };
    case ERROR:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
}
