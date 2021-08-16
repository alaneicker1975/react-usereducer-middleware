import { useReducer } from 'react';

const useReducerWithMiddleware = (reducer, initialState, middlewareFns) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const dispatchWithMiddleware = (action) => {
    middlewareFns.forEach((middlewareFn) => middlewareFn(action)(dispatch));
  };

  return [state, dispatchWithMiddleware];
};

export default useReducerWithMiddleware;
