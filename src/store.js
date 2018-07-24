import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import RootReducer from './Reducers/RootReducer';
import logger from 'redux-logger';

let state = {
   blah: "ASDF"
};

export default function configureStore(initialState = state) {
   return createStore(
      RootReducer,
      applyMiddleware(thunk, logger)
   );
}