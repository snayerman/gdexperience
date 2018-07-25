import { combineReducers } from 'redux';
import { modalReducer } from './ModalReducer';
 
const RootReducer = combineReducers({
   modalReducer
});
 
export default RootReducer;