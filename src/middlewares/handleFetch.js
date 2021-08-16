/* eslint-disable sonarjs/no-small-switch */
import {
  FETCH_TODOS,
  PATCH_TODO,
  SET_TODOS,
  UPDATE_TODO,
  DELETE_TODO,
  REMOVE_TODO,
} from '../types';

const handleFetch = (action) => (dispatch) => {
  switch (action.type) {
    case FETCH_TODOS:
      fetch('https://jsonplaceholder.typicode.com/todos')
        .then((res) => res.json())
        .then((payload) => dispatch({ type: SET_TODOS, payload }));
      break;
    case PUT_TODO:
      break;
    case DELETE_TODO:
      break;
    default:
      dispatch(action);
  }
};

export default handleFetch;
