/* eslint-disable sonarjs/no-small-switch */
import { FETCH_TODOS, PATCH_TODO, DELETE_TODO, setTodos } from '../actions';

const handleFetch = (action, dispatch) => {
  switch (action.type) {
    case FETCH_TODOS:
      fetch('https://jsonplaceholder.typicode.com/todos')
        .then((res) => res.json())
        .then((payload) => dispatch(setTodos(payload)));
      break;
    case PATCH_TODO:
      break;
    case DELETE_TODO:
      break;
    default:
      dispatch(action);
  }
};

export default handleFetch;
