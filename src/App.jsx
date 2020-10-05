import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import Blog from './components/Blog';
import Header from './components/Header';

function App() {
	return (
		<Router>
			<Header />
			<div>
				<Route exact path='/' component={Home} />
				<Route exact path='/about' component={About} />
				<Route exact path='/resume' component={Resume} />
				<Route exact path='/portfolio' component={Portfolio} />
				<Route exact path='/blog' component={Blog} />
			</div>
		</Router>
	);
}

export default App;
