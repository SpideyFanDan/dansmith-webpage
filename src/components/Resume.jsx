import React, { Component } from 'react';
import { MDBBtn } from 'mdbreact';
class Resume extends Component {
	render() {
		return (
			<a
				target='new'
				href='mailto:dansmith.coder@gmail.com'
				className='email-me'>
				<MDBBtn
					className='white-text'
					rounded
					size='lg'
					color='mdb-color darken-1'>
					Resume available upon request
				</MDBBtn>
			</a>
		);
	}
}

export default Resume;
