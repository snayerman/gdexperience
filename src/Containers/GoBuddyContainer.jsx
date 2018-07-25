import { connect } from 'react-redux';
import GoBuddy from '../Components/GoBuddy/GoBuddy';
import { selectModal } from '../Actions/ActionCreators';

const mapStateToProps = state => ({
   modal: state.modalReducer.type
});

const mapDispatchToProps = {
   selectModal
};

export default connect(mapStateToProps, mapDispatchToProps)(GoBuddy);