import React, { createContext, useContext } from 'react';
import PropTypes from 'prop-types';
import useReducerWithMiddleware from './hooks/useReducerWithMiddleware';
import reducer, { initialState } from './reducers/todos.reducer';
import handleFetch from './middlewares/handleFetch';
import devDebugger from './middlewares/devDebugger';

const AppContext = createContext({});

export const useAppContext = () => useContext(AppContext);

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducerWithMiddleware(reducer, initialState, [
    devDebugger,
    handleFetch,
  ]);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppProvider;
