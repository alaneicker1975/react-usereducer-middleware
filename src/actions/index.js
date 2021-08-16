// Action types
export const FETCH_TODOS = 'FETCH_TODOS';
export const PATCH_TODO = 'PUT_TODO';
export const DELETE_TODO = 'DELETE_TODO';

export const SET_TODOS = 'SET_TODOS';
export const UPDATE_TODO = 'SET_TODOS';
export const REMOVE_TODO = 'REMOVE_TODO';
export const SET_ERROR = 'SET_ERROR';

// Action creators
export const fetchTodos = () => ({ type: FETCH_TODOS });
export const patchTodos = (payload) => ({ type: PATCH_TODO, payload });
export const deleteTodos = (payload) => ({ type: DELETE_TODO, payload });

export const setTodos = (payload) => ({ type: SET_TODOS, payload });
export const updateTodo = (payload) => ({ type: UPDATE_TODO, payload });
export const removeTodo = (payload) => ({ type: REMOVE_TODO, payload });
export const setError = (payload) => ({ type: SET_ERROR, payload });
