import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import project from './project';
import comments from './comment';
import category from './category';
import user from './user';
import favorite from './favorite'
import steps from './step';
import currentUser from './currentUser';
import singleUser from '../services/auth';
import commentFormState from './commentPostState';

const rootReducer = combineReducers({
  project,
  comments,
  category,
  user,
  favorite,
  steps,
  singleUser,
  commentFormState,
  currentUser,
})

const logger = require('redux-logger').default;
const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancer = composeEnhancers(applyMiddleware(thunk, logger));

const configureStore = (preloadedState) => {
  return createStore(rootReducer, preloadedState, enhancer);
};

export default configureStore;
