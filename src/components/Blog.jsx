import React, { Component } from 'react';

class Blog extends Component {
	render() {
		return (
			<div className='blog'>
				<p>Blog coming soon! But feel free to read my old blog <a
					target='new'
					href='https://spideyfandan.wordpress.com/'
					className='view-button'>
					here
				</a> and my most recent developer blog <a
					target='new'
					href='https://www.linkedin.com/pulse/developers-journey-through-react-dan-smith/?trackingId=bD5%2B6UpqT1ahISUi%2Fjxr8Q%3D%3D'
					className='view-button'>
					here
				</a>.</p>
			</div>
		);
	}
}

export default Blog;
