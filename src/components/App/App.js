import React from 'react';
import { 
	BrowserRouter as Router, 
	HashRouter,
	Route,
	Switch, 
} from 'react-router-dom';
import Header from '../Header/Header';
import Search from '../Search';
import Facts from '../Facts';
import Footer from '../Footer/Footer';
import FourOhFour from '../FourOhFour/FourOhFour';

const App = () => (
	// wrap our App with Router to declare routes
	<HashRouter>
		<Header/>
			<Switch>
				<Route exact path="/" component={ Search } />
				<Route exact path="/facts" component={ Facts } />
				<Route component={ FourOhFour }/>
			</Switch>
		<Footer/>
	</HashRouter>
);

export default App;
