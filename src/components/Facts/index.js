import { connect } from 'react-redux';
import Facts from './Facts';
import { reset } from '../../data/actions/state';

const mapStateToProps = state => { 
    return { 
        chosenBreedID: state.chosenBreedID
    };
};
const mapDispatchToProps = dispatch => {
    return {
        handleReset: () => dispatch(reset()),
    }; 
};

export default connect(mapStateToProps, mapDispatchToProps)(Facts);