import { connect } from 'react-redux';
import History from './History';

const mapStateToProps = state => { 
    return { 
        history: state.history
    };
};

export default connect(mapStateToProps)(History);