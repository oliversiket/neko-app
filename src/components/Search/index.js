import { connect } from 'react-redux';
import Search from './Search';
import { updateChosenBreed } from '../../data/actions/state';

const mapStateToProps = state => { 
    return { 
        chosenBreed: state.chosenBreed,
    };
};

const mapDispatchToProps = dispatch => { 
    return { 
        handleBreed: (breed) => dispatch(updateChosenBreed(breed)),
    }; 
};
export default connect(mapStateToProps, mapDispatchToProps)(Search);