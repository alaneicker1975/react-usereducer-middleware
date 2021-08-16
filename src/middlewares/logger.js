const logger = (action) => (dispatch) => {
  console.log('ACTION:', action);
};

export default logger;
