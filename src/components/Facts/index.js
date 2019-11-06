import { connect } from 'react-redux';
import Facts from './Facts';

const mapStateToProps = state => { 
    return { 
        chosenBreedID: state.chosenBreedID
    };
};

export default connect(mapStateToProps)(Facts);