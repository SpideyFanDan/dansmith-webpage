import React, { Component } from 'react';
import { MDBBtn } from 'mdbreact';
import { Document, Page } from 'react-pdf';
import resumePDF from './dan-smith-resume-2020.pdf';
// import 'react-pdf/dist/Page/AnnotationLayer.css';
class Resume extends Component {
	state = { numPages: null, pageNumber: 1 };

	onDocumentLoadSuccess = ({ numPages }) => {
		this.setState({ numPages });
	};

	goToPrevPage = () =>
		this.setState((state) => ({ pageNumber: state.pageNumber - 1 }));
	goToNextPage = () =>
		this.setState((state) => ({ pageNumber: state.pageNumber + 1 }));
	render() {
		const { pageNumber, numPages } = this.state;
		return (
			<div>
				<a
					target='new'
					href='https://drive.google.com/file/d/1ZoYpvnoSyXHyXHGc0F2ALXjO43VyrN_l/view?usp=sharing'
					className='email-me'>
					<MDBBtn
						className='white-text'
						rounded
						size='lg'
						color='mdb-color darken-1'>
						Click here to download or view below
					</MDBBtn>
				</a>
				<hr />
				<h2>Resume</h2>
				<div style={{ width: 600 }}>
					<img src='../images/dansmith-resume.jpg' alt='Dan Smith resume'></img>
				</div>
			</div>
		);
	}
}

export default Resume;
