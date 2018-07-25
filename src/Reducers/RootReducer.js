import { combineReducers } from 'redux';
import { test } from './TestReducer';
import { modalReducer } from './ModalReducer';
 
const RootReducer = combineReducers({
   modalReducer
});
 
export default RootReducer;