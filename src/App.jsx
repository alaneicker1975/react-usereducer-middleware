import React, { useEffect } from 'react';
import { useAppContext } from './App.provider';
import { FETCH_TODOS } from './actions';
import TodoList from './components/TodoList';

const App = () => {
  const { state, dispatch } = useAppContext();

  useEffect(() => {
    dispatch({ type: FETCH_TODOS });
  }, []);

  return (
    <main>
      <h1>Todo List</h1>
      <TodoList items={state.todos} onStatusChange={() => {}} />
    </main>
  );
};

export default App;
