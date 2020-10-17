import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { MDBBtn } from 'mdbreact';
// import ReactPlayer from 'react-player';

export default class Portfolio extends Component {
	render() {
		return (
			<div className='cards'>
				{/* <Carousel>
					<Carousel.Item>
						<img
							className='carousel-image'
							src={require('../images/spidey-trivia.jpg')}
							alt='Spidey Trivia'
						/>
						<a
							href='https://spideyfandan.github.io/Spidey-Trivia-Game/'
							target='new'>
							<Carousel.Caption className='caption'>
								<h6>Spidey Trivia Game</h6>
								<p>Standard HTML/CSS/JavaScript trivia app</p>
							</Carousel.Caption>
						</a>
					</Carousel.Item>
					<Carousel.Item>
						<img
							className='carousel-image'
							src={require('../images/sbr-screenshot.jpg')}
							alt='Superhero Battle Royale'
							fluid
						/>
						<a
							href='https://superhero-battle-royale.herokuapp.com/'
							target='new'>
							<Carousel.Caption className='caption'>
								<h6>Superhero Battle Royale App</h6>
								<p>
									Mongoose, Express, React, and Node app with personal MongoDB
									API with CRUD functionality and Bootstrap styling.
								</p>
							</Carousel.Caption>
						</a>
					</Carousel.Item>
					<Carousel.Item>
						<img
							className='carousel-image'
							src={require('../images/comics-collection-screenshot.jpg')}
							alt='Comic Book Collection'
							fluid
						/>
						<a
							href='https://dws-comic-book-organizer.herokuapp.com/'
							target='new'>
							<Carousel.Caption className='caption'>
								<h6>Comic Book Collection App</h6>
								<p>
									Django/Python backend with personal API, using authentication
									and Synthesizers, and CRUD functionality. React App frontend
									with Bootstrap styling and ComicVine free API.
								</p>
							</Carousel.Caption>
						</a>
					</Carousel.Item>
				</Carousel> */}
				<Card style={{ width: '80%' }} className='portfolio-card'>
					<Card.Img
						variant='top'
						src={require('../images/spidey-trivia.jpg')}
						alt='Spidey Trivia Game'
					/>

					<Card.Text className='text-center'>Spidey Trivia Game</Card.Text>
					<Card.Title className='text-center'>
						Standard HTML/CSS/JavaScript App
					</Card.Title>
					<Card.Footer className='text-center'>
						<a
							href='https://spideyfandan.github.io/Spidey-Trivia-Game/'
							target='new'>
							<button className='portfolio-btn'>Deployed App</button>
						</a>
						<a
							href='https://github.com/SpideyFanDan/Spidey-Trivia-Game'
							target='new'>
							<button className='portfolio-btn'>Git Repository</button>
						</a>
					</Card.Footer>
				</Card>
				<Card style={{ width: '80%' }} className='portfolio-card'>
					<Card.Img
						color='top'
						src={require('../images/sbr-screenshot.jpg')}
						alt='Superhero Battle Royale App'
					/>
					<Card.Body className='text-center'>
						<Card.Title>Superhero Battle Royale App</Card.Title>
						<Card.Text>
							Mongoose, Express, React, and Node app with personal MongoDB API
							with CRUD functionality and Bootstrap styling.
						</Card.Text>
					</Card.Body>
					<Card.Footer className='text-center'>
						<a
							href='https://superhero-battle-royale.herokuapp.com/'
							target='new'>
							<button className='portfolio-btn'>Deployed App</button>
						</a>
						<a
							href='https://github.com/MADD-HOUSE/superhero-battle-royale-frontend'
							target='new'>
							<button className='portfolio-btn'>Git Repo Frontend</button>
						</a>
						<a
							href='https://github.com/MADD-HOUSE/superhero-battle-royale-backend'
							target='new'>
							<button className='portfolio-btn'>Git Repo Backend</button>
						</a>
					</Card.Footer>
				</Card>
				<Card style={{ width: '80%' }} className='portfolio-card'>
					<Card.Img
						color='top'
						src={require('../images/comics-collection-screenshot.jpg')}
						alt='Comics collection app'
					/>

					<Card.Title className='text-center'>
						Comic Book Collection App
					</Card.Title>
					<Card.Text className='text-center'>
						Django/Python backend with personal API, using authentication and
						Synthesizers, and CRUD functionality. React App frontend with
						Bootstrap styling and ComicVine free API.
					</Card.Text>
					<Card.Footer className='text-center'>
						<a
							href='https://dws-comic-book-organizer.herokuapp.com/'
							target='new'>
							<button className='portfolio-btn'>Deployed App</button>
						</a>
						<a
							href='https://github.com/SpideyFanDan/comic-book-organizer'
							target='new'>
							<button className='portfolio-btn'>Git Repo Frontend</button>
						</a>
						<a
							href='https://github.com/SpideyFanDan/comics-collection-backend'
							target='new'>
							<button className='portfolio-btn'>Git Repo Backend</button>
						</a>
					</Card.Footer>
				</Card>
			</div>
		);
	}
}
