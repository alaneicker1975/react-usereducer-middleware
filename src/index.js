/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import AppProvider from './App.provider';
import './styles/main.scss';

(async () => {
  if (process.env.NODE_ENV !== 'production') {
    const axe = await import('react-axe');
    axe(React, ReactDOM, 1000);
  }
})();

ReactDOM.render(
  <AppProvider>
    <App />
  </AppProvider>,
  document.querySelector('#root'),
);
