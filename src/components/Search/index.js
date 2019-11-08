import { connect } from 'react-redux';
import Search from './Search';
import { updateChosenBreed, saveHistory } from '../../data/actions/state';

const mapStateToProps = state => { 
    return { 
        chosenBreedID: state.chosenBreedID,
        chosenBreedName: state.chosenBreedName,
        history: state.history
    };
};

const mapDispatchToProps = dispatch => {
    return {
        handleBreed: (id,name) => dispatch(updateChosenBreed(id,name)),
        handleHistory: (id,name) => dispatch(saveHistory(id,name)),
    }; 
};
export default connect(mapStateToProps, mapDispatchToProps)(Search);