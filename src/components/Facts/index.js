import { connect } from 'react-redux';
import Facts from './Facts';

const mapStateToProps = state => { 
    return { 
        chosenBreed: state.chosenBreed
    };
};

export default connect(mapStateToProps)(Facts);