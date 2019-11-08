import React from 'react';
import { 
    BrowserRouter as Router, 
	Route,
	Switch, 
} from 'react-router-dom';
import Header from '../Header/Header';
import Search from '../Search';
import Facts from '../Facts';
import Footer from '../Footer/Footer';
import FourOhFour from '../FourOhFour/FourOhFour';

const App = () => (
	<Router>
		<Header/>
		<Switch>	
			<Route exact path="/" component={ Search } />
			<Route exact path="/facts" component={ Facts } />
			<Route component={ FourOhFour }/>
		</Switch>
		<Footer/>
		
	</Router>
);

export default App;
