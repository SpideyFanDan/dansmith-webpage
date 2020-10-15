import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Container, Button, Image } from 'react-bootstrap';
import './Home.css';

export default class Home extends Component {
	render() {
		return (
			<Container fluid>
				<Jumbotron className='jumbotron'>
					<h1>Welcome to Dan Smith's Website</h1>
					<p>Web Developer and Super-Geeky Comics Fan</p>
					<Link to='/about'>
						<Button className='btn'>About</Button>
					</Link>
					<Link to='/portfolio'>
						<Button className='btn'>Portfolio</Button>
					</Link>
					<Link to='/resume'>
						<Button className='btn'>Resume</Button>
					</Link>
					<Link to='/blog'>
						<Button className='btn'>Blog</Button>
					</Link>
				</Jumbotron>
				<Image
					className='websling'
					src={require('../images/Spidey_Dan_Web_Slinging_Buddy.jpg')}
					alt='webslinger Dan'
					fluid
				/>
			</Container>
		);
	}
}
