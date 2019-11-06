import React from 'react';
import { 
    BrowserRouter as Router, 
    Route, 
} from 'react-router-dom';
import Header from '../Header/Header';
import Search from '../Search';
import History from '../History';
import Facts from '../Facts';

const App = () => (
	<Router>
		<>
			<Header/>
			<Route exact path="/" component={ Search } />
			<Route exact path="/facts" component={ Facts } />
			<History/>
		</>
	</Router>
);

export default App;
