import { connect } from 'react-redux';
import App from '../App';
import { simpleAction } from '../Actions/ActionCreators';

const mapStateToProps = state => ({
  init: true
});

const mapDispatchToProps = {
   simpleAction
};

export default connect(mapStateToProps, mapDispatchToProps)(App);