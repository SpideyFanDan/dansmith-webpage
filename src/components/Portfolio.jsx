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
							controls
							url='https://youtu.be/IqZto1A9ON0'
						/>
					</div>
					<Card.Body className='text-center'>
					<Card.Title>
						What Would Max Do? Covid-19 Vaccine Info App
					</Card.Title>
					<Card.Text className='card-text' style={{ color: '#2d4059' }}>
						React.js and React Bootstrap created in three days during a Hack-a-thon event through General Assembly
					</Card.Text>
					</Card.Body>
					<Card.Footer className='text-center'>
						<a
							href='https://wwmd.info/'
							target='new'>
							<button className='portfolio-btn'>Deployed App</button>
						</a>
						<a
							href='https://github.com/feb-hackathon-group5-lmdj2/wwmd-front-end'
							target='new'>
							<button className='portfolio-btn'>GitHub Repo</button>
						</a>
					</Card.Footer>
				</Card>
				<Card style={{ width: '80%' }} className='portfolio-card'>
					<div className='player-wrapper'>
						<ReactPlayer
							className='react-player'
							width='100%'
							height='100%'
							controls
							url='https://youtu.be/FWjOt6PZ9Gg'
						/>
					</div>
					<Card.Body className='text-center'>
					<Card.Title>
						Comic Book Collection App
					</Card.Title>
					<Card.Text className='card-text' style={{ color: '#2d4059' }}>
						Django/Python backend with personal API, using authentication and
						Synthesizers, and CRUD functionality. React App frontend with
						Bootstrap styling and ComicVine free API.
					</Card.Text>
					</Card.Body>
					<Card.Footer className='text-center'>
						<a
							href='https://dws-comic-book-organizer.herokuapp.com/'
							target='new'>
							<button className='portfolio-btn'>Deployed App</button>
						</a>
						<a
							href='https://github.com/SpideyFanDan/comic-book-organizer'
							target='new'>
							<button className='portfolio-btn'>GitHub Repo Frontend</button>
						</a>
						<a
							href='https://github.com/SpideyFanDan/comics-collection-backend'
							target='new'>
							<button className='portfolio-btn'>GitHub Repo Backend</button>
						</a>
					</Card.Footer>
				</Card>
				<Card style={{ width: '80%' }} className='portfolio-card'>
					<div className='player-wrapper'>
						<ReactPlayer
							className='react-player'
							width='100%'
							height='100%'
							controls
							url='https://youtu.be/87QT0HzPPY8'
						/>
					</div>
					<Card.Body className='text-center'>
						<Card.Title>Superhero Battle Royale App</Card.Title>
						<Card.Text className='card-text' style={{ color: '#2d4059' }}>
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
							<button className='portfolio-btn'>GitHub Repo Frontend</button>
						</a>
						<a
							href='https://github.com/MADD-HOUSE/superhero-battle-royale-backend'
							target='new'>
							<button className='portfolio-btn'>GitHub Repo Backend</button>
						</a>
					</Card.Footer>
				</Card>
				
				<Card style={{ width: '80%' }} className='portfolio-card'>
					<div className='player-wrapper'>
						<ReactPlayer
							className='react-player'
							width='100%'
							height='100%'
							controls
							url='https://youtu.be/YjYdB-7WWfE'
						/>
					</div>
					<Card.Body className='text-center'>
						<Card.Title>Spidey Trivia Game</Card.Title>
					<Card.Text className='card-text' style={{ color: '#2d4059' }}>
						Standard HTML/CSS/JavaScript App
					</Card.Text>
					</Card.Body>
					<Card.Footer className='text-center'>
						<a
							href='https://spideyfandan.github.io/Spidey-Trivia-Game/'
							target='new'>
							<button className='portfolio-btn'>Deployed App</button>
						</a>
						<a
							href='https://github.com/SpideyFanDan/Spidey-Trivia-Game'
							target='new'>
							<button className='portfolio-btn'>GitHub Repo</button>
						</a>
					</Card.Footer>
				</Card>
			</div>
		);
	}
}
