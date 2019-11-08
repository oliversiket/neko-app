import React from 'react';
import { 
    BrowserRouter as Router, 
    Route, 
} from 'react-router-dom';
import Header from '../Header/Header';
import Search from '../Search';
import History from '../History';
import Facts from '../Facts';
import Footer from '../Footer/Footer';

const App = () => (
	<Router>
		<>
			<Header/>
			<Route exact path="/" component={ Search } />
			<Route exact path="/" component={ History } />
			<Route exact path="/facts" component={ Facts } />
			<Footer/>
		</>
	</Router>
);

export default App;
