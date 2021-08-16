/* eslint-disable sonarjs/no-small-switch */
import { SET_TODOS } from '../types';

export const initialState = {
  todos: [],
};

const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TODOS:
      return { ...state, todos: [...state.todos, ...action.payload] };
    default:
      return state;
  }
};

export default todosReducer;
