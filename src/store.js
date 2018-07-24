import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './Reducers/RootReducer';
import logger from '../../../Library/Caches/typescript/2.9/node_modules/@types/redux-logger';

let state = {
};

export default function configureStore(initialState = state) {
   return createStore(
      rootReducer,
      applyMiddleware(thunk, logger)
   );
}