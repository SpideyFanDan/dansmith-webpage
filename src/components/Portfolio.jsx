import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';

export default class Portfolio extends Component {
	render() {
		return (
			<div>
				<Carousel>
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
				</Carousel>
			</div>
		);
	}
}
