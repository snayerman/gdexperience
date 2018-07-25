import { connect } from 'react-redux';
import AssistModal from '../Components/ModalScreen/AssistModal';
import { selectModal } from '../Actions/ActionCreators';

const mapStateToProps = state => ({
   modal: state.modalReducer.type
});

const mapDispatchToProps = {
   selectModal
};

export default connect(mapStateToProps, mapDispatchToProps)(AssistModal);