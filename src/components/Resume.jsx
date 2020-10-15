import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
class Resume extends Component {
	// state = { numPages: null, pageNumber: 1 };

	// onDocumentLoadSuccess = ({ numPages }) => {
	// 	this.setState({ numPages });
	// };

	// goToPrevPage = () =>
	// 	this.setState((state) => ({ pageNumber: state.pageNumber - 1 }));
	// goToNextPage = () =>
	// 	this.setState((state) => ({ pageNumber: state.pageNumber + 1 }));
	render() {
		// const { pageNumber, numPages } = this.state;
		return (
			<div>
				<a
					target='new'
					href='https://drive.google.com/file/d/1ZoYpvnoSyXHyXHGc0F2ALXjO43VyrN_l/view?usp=sharing'
					className='view-button'>
					<Button bsClass='view-button' rounded variant='gray'>
						Click here to download or view below
					</Button>
				</a>
				<hr />
				<h2>Resume</h2>
				<div>
					<img
						className='resume-img'
						src={require('../images/dansmith-resume.jpg')}
						alt='Dan Smith resume'></img>
				</div>
			</div>
		);
	}
}

export default Resume;
