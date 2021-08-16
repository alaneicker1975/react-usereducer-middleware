const devDebugger = (action) => {
  if (process.env.NODE_ENV === 'development') {
    console.log('Dispatched action:', action);
  }
};

export default devDebugger;
