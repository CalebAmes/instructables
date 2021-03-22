import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import configureStore from './store'
import { Provider as ReduxProvider } from "react-redux";
import App from './App';

const store = configureStore();

ReactDOM.render(
  <React.StrictMode>
    <ReduxProvider store={store}>
      <App />
    </ReduxProvider>
  </React.StrictMode>, document.getElementById('root')
);
