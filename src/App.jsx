import React, { useEffect } from 'react';
import { useAppContext } from './App.provider';
import { FETCH_TODOS } from './actions';

const App = () => {
  const { state, dispatch } = useAppContext();

  useEffect(() => {
    dispatch({ type: FETCH_TODOS });
  }, []);

  return (
    <main>
      <pre>{JSON.stringify(state.todos, null, 2)}</pre>
    </main>
  );
};

export default App;
