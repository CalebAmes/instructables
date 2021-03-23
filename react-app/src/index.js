import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider as ReduxProvider } from "react-redux";
import './index.css';
import configureStore from './store';
import App from './App';

const store = configureStore();

window.store = store;

function Root() {
  return (
    <ReduxProvider store={store}>
      <BrowserRouter>
        <App/>
      </BrowserRouter>
    </ReduxProvider>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>, document.getElementById('root')
);
