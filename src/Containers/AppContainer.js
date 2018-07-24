import { connect } from '../../../../Library/Caches/typescript/2.9/node_modules/@types/react-redux';
// import { getTransactions } from '../ducks/actions';
import App from '../App';

import { simpleAction } from '../Actions/ActionCreators';

const mapStateToProps = state => ({
  init: true
});

const mapDispatchToProps = {
   simpleAction
};

export default connect(mapStateToProps, mapDispatchToProps)(App);