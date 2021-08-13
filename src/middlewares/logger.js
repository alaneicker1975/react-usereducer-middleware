const logger = (state) => (action) => (dispatch) => {
  console.log('ACTION:', action);
};

export default logger;
