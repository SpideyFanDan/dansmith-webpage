import React, { Component } from 'react';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { MDBIcon, MDBContainer, MDBBtn } from 'mdbreact';

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
						<Nav.Link>
							<MDBContainer className='social'>
								<a
									href='https://www.linkedin.com/in/dansmithdev/'
									className='li-ic mr-3'
									target='new'>
									<MDBIcon fab icon='linkedin-in' />
								</a>
								<a
									href='SpideyFanDan.github'
									className='git-ic mr-3'
									target='new'>
									<MDBIcon fab icon='github' />
								</a>
								<a
									href='https://www.instagram.com/spideyfandan/'
									className='ins-ic mr-3'
									target='new'>
									<MDBIcon fab icon='instagram' />
								</a>
								<a
									href='https://twitter.com/SpideyFanDan'
									className='tw-ic mr-3'
									target='new'>
									<MDBIcon fab icon='twitter' />
								</a>
								<a
									href='https://www.facebook.com/SpideyFanDan'
									className='fb-ic mr-3'
									target='new'>
									<MDBIcon fab icon='facebook-f' />
								</a>
								<a
									href='https://www.youtube.com/channel/UCDvqg8L184ADwDCt-Dkkdbg/'
									className='yt-ic mr-3'
									target='new'>
									<MDBIcon fab icon='youtube' />
								</a>
								<a
									href='mailto:dansmith.coder@gmail.com'
									className='email-ic mr-3'
									target='new'>
									<MDBIcon icon='envelope' />
								</a>
							</MDBContainer>
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		);
	}
}

export default Header;
