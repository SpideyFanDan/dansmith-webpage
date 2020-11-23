import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import ReactPlayer from 'react-player';

export default class Portfolio extends Component {
	render() {
		return (
			<div className='cards'>
				<Card style={{ width: '80%' }} className='portfolio-card'>
					<div className='player-wrapper'>
						<ReactPlayer
							className='react-player'
							width='100%'
							height='100%'
							controls="controls"
							url='https://youtu.be/FWjOt6PZ9Gg'
						/>
					</div>
					<Card.Title className='text-center'>Spidey Trivia Game</Card.Title>
					<Card.Text className='text-center'>
						Standard HTML/CSS/JavaScript App
					</Card.Text>
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
					<div className='player-wrapper'>
						<ReactPlayer
							className='react-player'
							width='100%'
							height='100%'
							url='https://youtu.be/FWjOt6PZ9Gg'
						/>
					</div>
					<Card.Body className='text-center'>
						<Card.Title>Superhero Battle Royale App</Card.Title>
						<Card.Text style={{ color: '#2d4059' }}>
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
					<div className='player-wrapper'>
						<ReactPlayer
							className='react-player'
							width='100%'
							height='100%'
							url='https://youtu.be/FWjOt6PZ9Gg'
						/>
					</div>
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
