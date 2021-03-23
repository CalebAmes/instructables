import React from 'react';
import {Provider} from 'react-redux'
import {BrowserRouter} from 'react-router-dom'
import ReactDOM from 'react-dom';
import './index.css';
import configureStore from './store'
import { Provider as ReduxProvider } from "react-redux";
import App from './App';
const store = configureStore()

const Root = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
      <App / >
      </BrowserRouter>
    </Provider>
  )
}


ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>, document.getElementById('root')
);
