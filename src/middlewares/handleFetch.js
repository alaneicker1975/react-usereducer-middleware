/* eslint-disable sonarjs/no-small-switch */
import { FETCH_TODOS, SET_TODOS } from '../actions';

const handleFetch = (state) => (action) => (dispatch) => {
  switch (action.type) {
    case FETCH_TODOS:
      fetch('https://jsonplaceholder.typicode.com/todos')
        .then((res) => res.json())
        .then((payload) => dispatch({ type: SET_TODOS, payload }));
      break;
    default:
  }
};

export default handleFetch;
