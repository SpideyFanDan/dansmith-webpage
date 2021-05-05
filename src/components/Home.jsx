import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Container, Image, Row, Col } from 'react-bootstrap';
import './Home.css';

export default class Home extends Component {
	render() {
		return (
			<Container className='jumbotron' fluid>
				<Row >
					 <img
						className='read-comics'
						src={require('../images/DanSmith.png')}
						alt='SpideyFanDan Logo'
						// width='50'
						// height='100'
					/><img
						className='logo'
						src={require('../images/spideyfandan_words_logo_wgreybg.png')}
						alt='SpideyFanDan Logo'
						// width='500'
						// height='100'
					/></Row>
					<Row><Col><h1 className="jumbotron-header">Welcome to Dan Smith's Website</h1><p className="intro-p">I'm a master teacher and life-long learner turned software developer with an adventurous soul who loves languages, travel, superheroes, and leading people and organizations to their full potential. </p></Col></Row>
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
					
				
				
			</Container>
		);
	}
}
