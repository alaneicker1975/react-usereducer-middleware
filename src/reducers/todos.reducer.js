/* eslint-disable sonarjs/no-small-switch */
import { SET_TODOS, SET_ERROR } from '../actions';

export const initialState = {
  error: null,
  todos: [],
};

const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TODOS:
      return { ...state, todos: [...state.todos, ...action.payload] };
    case SET_ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

export default todosReducer;
