/* eslint-disable sonarjs/no-small-switch */
import { SET_TODOS, UPDATE_TODO } from '../actions';

export const initialState = {
  appTitle: 'Todo List',
  todos: [],
};

const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TODOS:
      return { ...state, todos: [...state.todos, ...action.payload] };
    case UPDATE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload.id
            ? { ...todo, completed: action.payload.completed }
            : todo,
        ),
      };
    default:
      return state;
  }
};

export default todosReducer;
