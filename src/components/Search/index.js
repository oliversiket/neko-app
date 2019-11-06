import { connect } from 'react-redux';
import Search from './Search';
import { updateChosenBreed, saveHistory } from '../../data/actions/state';

const mapStateToProps = state => { 
    return { 
        chosenBreed: state.chosenBreed,
    };
};

const mapDispatchToProps = dispatch => { 
    return { 
        handleBreed: (breed) => dispatch(updateChosenBreed(breed)),
        handleHistory: (id) => dispatch(saveHistory(id)),
    }; 
};
export default connect(mapStateToProps, mapDispatchToProps)(Search);