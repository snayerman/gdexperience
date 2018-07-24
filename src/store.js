import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/RootReducer';

let state = {
};

export default function configureStore(initialState = state) {
   return createStore(
      rootReducer,
      applyMiddleware(thunk)
   );
}