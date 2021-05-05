import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
class Resume extends Component {
	render() {
		return (
			<div className='resume-page'>
				<a
					target='new'
					href='https://drive.google.com/file/d/1VAvzz9vJO38UsIj1uajC5iWvQUXb1fg3/view?usp=sharing'
					className='view-button'>
					<Button bsClass='view-button' rounded variant='gray'>
						Click here to download pdf file or view below
					</Button>
				</a>
				<hr />
				<h2 className='resume'>Resume:</h2>
				<div>
					<img
						className='resume-img'
						src={require('../images/dansmith-resume.png')}
						alt='Dan Smith resume'></img>
				</div>
			</div>
		);
	}
}

export default Resume;
