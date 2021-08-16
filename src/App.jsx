import React, { useEffect } from 'react';
import { useAppContext } from './App.provider';
import { fetchTodos, patchTodo } from './actions';
import TodoList from './components/TodoList';

const App = () => {
  const { state, dispatch } = useAppContext();

  useEffect(() => {
    dispatch(fetchTodos());
  }, []);

  return (
    <main>
      <h1>{state.appTitle}</h1>
      <TodoList
        items={state.todos}
        onComplete={(id, completed) => dispatch(patchTodo({ id, completed }))}
      />
    </main>
  );
};

export default App;
