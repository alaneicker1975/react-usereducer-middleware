/* eslint-disable sonarjs/no-small-switch */
import {
  FETCH_TODOS,
  PATCH_TODO,
  DELETE_TODO,
  setTodos,
  updateTodo,
} from '../actions';

const handleFetch = (action, dispatch) => {
  switch (action.type) {
    case FETCH_TODOS:
      fetch('https://jsonplaceholder.typicode.com/todos')
        .then((res) => res.json())
        .then((payload) => dispatch(setTodos(payload)));
      break;
    case PATCH_TODO:
      fetch(`https://jsonplaceholder.typicode.com/posts/${action.payload.id}`, {
        method: 'PATCH',
        body: JSON.stringify({ completed: action.payload.completed }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((res) => res.json())
        .then((payload) => dispatch(updateTodo(payload)));
      break;
    case DELETE_TODO:
      break;
    default:
      dispatch(action);
  }
};

export default handleFetch;
