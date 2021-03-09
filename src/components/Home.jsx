import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Container, Image } from 'react-bootstrap';
import './Home.css';

export default class Home extends Component {
	render() {
		return (
			<Container fluid>
				<Jumbotron className='jumbotron'>
					<div className='jumbotron-div'><img
						className='logo'
						src={require('../images/spideyfandan_words_logo_wgreybg.png')}
						alt='SpideyFanDan Logo'
						// width='500'
						// height='100'
					/>
					<h1 className="jumbotron-header">Welcome to Dan Smith's Website</h1>
					<p>Web Developer and Super-Geeky Comics Fan</p>
					<Image
					className='websling'
					src={require('../images/Spidey_Dan_Web_Slinging_Buddy.jpg')}
					alt='webslinger Dan'
					fluid
				/></div>
				<Link to='/about'>
						<button className='btn'>About</button>
					</Link>
					<Link to='/portfolio'>
						<button className='btn'>Portfolio</button>
					</Link>
					<Link to='/resume'>
						<button className='btn'>Resume</button>
					</Link>
					<Link to='/blog'>
						<button className='btn'>Blog</button>
					</Link>
					
				</Jumbotron>
				
			</Container>
		);
	}
}
