import React, { Component } from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import '../font-awesome/css/font-awesome.min.css'
import './Header.css';

class Header extends Component {
	render() {
		return (
			<Navbar inverse collapseOnSelect>
				<h1 className="banner-large">Zach Toben</h1>
				<Navbar.Collapse>
					<Nav>
						<NavItem eventKey={1} href="#Portfolio">Portfolio</NavItem>
						<NavItem eventKey={2} href="#About">About</NavItem>
						<NavItem eventKey={3} href="#Resume">Resume</NavItem>
						<NavItem eventKey={4} href="#Contact">Contact</NavItem>
					</Nav>
					<Nav pullRight>
						<NavItem eventKey={1} href="#"><i className="fa fa-twitter-square fa-lg" aria-hidden="true"></i></NavItem>
						<NavItem eventKey={2} href="#"><i className="fa fa-linkedin-square fa-lg" aria-hidden="true"></i></NavItem>
						<NavItem eventKey={3} href="#"><i className="fa fa-github-square fa-lg" aria-hidden="true"></i></NavItem>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		);
	}
}

export default Header;