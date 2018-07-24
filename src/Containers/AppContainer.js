import { connect } from 'react-redux';
// import { getTransactions } from '../ducks/actions';
import App from '../App';

const mapStateToProps = state => ({
  init: true
});

const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(App);