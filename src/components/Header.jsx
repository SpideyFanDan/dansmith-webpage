import React, { Component } from 'react';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { MDBIcon, MDBContainer } from 'mdbreact';
import 'mdbreact/dist/css/mdb.css';
class Header extends Component {
	render() {
		return (
			<Navbar className='navbar' collapseOnSelect expand='lg'>
				<Navbar.Brand className='brand' href='/'>
					<img
						className='d-inline-block align-top'
						src={require('../images/spideyfandan_logo.png')}
						alt='SpideyFanDan Logo'
					/>
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
							<NavDropdown.Item className='dropdown' href='/blog'>
								Travel Blog 1
							</NavDropdown.Item>
							<NavDropdown.Item className='dropdown' href='/blog'>
								Travel Blog 2
							</NavDropdown.Item>
							<NavDropdown.Item className='dropdown' href='/blog'>
								Travel Blog 3
							</NavDropdown.Item>
							<NavDropdown.Divider />
							<NavDropdown.Item className='dropdown' href='/blog'>
								Developer Blog 1
							</NavDropdown.Item>
							<NavDropdown.Item className='dropdown' href='/blog'>
								Developer Blog 2
							</NavDropdown.Item>
						</NavDropdown>
					</Nav>
					<Nav>
						<MDBContainer className='social'>
							<a
								target='new'
								href='https://www.linkedin.com/in/dansmithdev/'
								className='li-ic indigo-text mr-2'>
								<MDBIcon fab icon='linkedin' />
							</a>
							<a
								target='new'
								href='https://github.com/SpideyFanDan'
								className='git-ic black-text mr-2'>
								<MDBIcon fab icon='github-square' />
							</a>
							<a
								target='new'
								href='https://www.instagram.com/spideyfandan/'
								className='ins-ic pink-text mr-2'>
								<MDBIcon fab icon='instagram' />
							</a>
							<a target='new' href='https://twitter.com/SpideyFanDan'>
								<MDBIcon
									className='tw-ic light-blue-text mr-2'
									fab
									icon='twitter-square'
								/>
							</a>
							<a
								target='new'
								href='https://www.facebook.com/SpideyFanDan'
								className='fb-ic blue-text mr-2'>
								<MDBIcon className='' fab icon='facebook' />
							</a>
							<a
								target='new'
								href='https://www.youtube.com/channel/UCDvqg8L184ADwDCt-Dkkdbg/'
								className='red-text pr-2'>
								<MDBIcon fab icon='youtube' />
							</a>
							<a
								target='new'
								href='mailto:dansmith.coder@gmail.com'
								className='email-ic white-text mr-2'>
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
