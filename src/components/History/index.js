import { connect } from 'react-redux';
import History from './History';
import { updateChosenBreed } from '../../data/actions/state';


const mapStateToProps = state => { 
    return { 
        history: state.history
    };
};

const mapDispatchToProps = dispatch => {
    return {
        handleBreed: (id,name) => dispatch(updateChosenBreed(id,name)),
    }; 
};

export default connect(mapStateToProps, mapDispatchToProps)(History);