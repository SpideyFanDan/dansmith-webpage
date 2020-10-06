import React, { Component } from 'react';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { MDBIcon, MDBContainer } from 'mdbreact';

class Header extends Component {
	render() {
		return (
			<Navbar className='navbar' collapseOnSelect expand='lg'>
				<Navbar.Brand className='brand' href='/'>
					SpideyFanDan
				</Navbar.Brand>
				<Navbar.Toggle aria-controls='responsive-navbar-nav' />
				<Navbar.Collapse id='responsive-navbar-nav'>
					<Nav className='mr-auto'>
						<Nav.Link className='nav-link' href='/about'>
							About
						</Nav.Link>
						<Nav.Link className='nav-link' href='/portfolio'>
							Portfolio
						</Nav.Link>
						<Nav.Link className='nav-link' href='/resume'>
							Resume
						</Nav.Link>
						<NavDropdown title='Blogs' id='collasible-nav-dropdown'>
							<NavDropdown.Item className='dropdown' href='#action/3.1'>
								Travel Blog 1
							</NavDropdown.Item>
							<NavDropdown.Item className='dropdown' href='#action/3.2'>
								Travel Blog 2
							</NavDropdown.Item>
							<NavDropdown.Item className='dropdown' href='#action/3.3'>
								Travel Blog 3
							</NavDropdown.Item>
							<NavDropdown.Divider />
							<NavDropdown.Item className='dropdown' href='#action/3.4'>
								Developer Blog 1
							</NavDropdown.Item>
							<NavDropdown.Item className='dropdown' href='#action/3.4'>
								Developer Blog 2
							</NavDropdown.Item>
						</NavDropdown>
					</Nav>
					<Nav>
						<MDBContainer className='social'>
							<a
								target='new'
								href='https://www.linkedin.com/in/dansmithdev/'
								className='li-ic mr-3'>
								<MDBIcon fab icon='linkedin-in' />
							</a>
							<a
								target='new'
								href='https://github.com/SpideyFanDan'
								className='git-ic mr-3'>
								<MDBIcon fab icon='github' />
							</a>
							<a
								target='new'
								href='https://www.instagram.com/spideyfandan/'
								className='ins-ic mr-3'>
								<MDBIcon fab icon='instagram' />
							</a>
							<a
								target='new'
								href='https://twitter.com/SpideyFanDan'
								className='tw-ic mr-3'>
								<MDBIcon fab icon='twitter' />
							</a>
							<a
								target='new'
								href='https://www.facebook.com/SpideyFanDan'
								className='fb-ic mr-3'>
								<MDBIcon fab icon='facebook-f' />
							</a>
							<a
								target='new'
								href='https://www.youtube.com/channel/UCDvqg8L184ADwDCt-Dkkdbg/'
								className='yt-ic mr-3'>
								<MDBIcon fab icon='youtube' />
							</a>
							<a
								target='new'
								href='mailto:dansmith.coder@gmail.com'
								className='email-ic mr-3'>
								<MDBIcon icon='envelope' />
							</a>
						</MDBContainer>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		);
	}
}

export default Header;
