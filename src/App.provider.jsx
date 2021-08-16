import React, { createContext, useContext } from 'react';
import PropTypes from 'prop-types';
import useReducerWithMiddleware from './hooks/useReducerWithMiddleware';
import todosReducer, { initialState } from './reducers/todos.reducer';
import handleFetch from './middlewares/handleFetch';
import logger from './middlewares/logger';

const AppContext = createContext({});

export const useAppContext = () => useContext(AppContext);

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducerWithMiddleware(
    todosReducer,
    initialState,
    [logger, handleFetch],
  );

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
