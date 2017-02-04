import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import '../font-awesome/css/font-awesome.min.css'
import './Header.css';

class Header extends Component {
	render() {
		return (
			<Navbar name="Portfolio" inverse collapseOnSelect>
				<h1 className="banner-large">Zach Toben</h1>
				<Navbar.Collapse>
					<Nav>
						<NavItem href="#Portfolio">Portfolio</NavItem>
						<NavItem href="#About">About</NavItem>
						<NavItem href="#Resume">Resume</NavItem>
						<NavItem href="#Contact">Contact</NavItem>
					</Nav>
					<Nav pullRight>
						<NavItem href="https://twitter.com/ztoben"><i className="fa fa-twitter-square fa-lg" aria-hidden="true"></i></NavItem>
						<NavItem href="https://www.linkedin.com/in/zachary-toben-bbab4a84"><i className="fa fa-linkedin-square fa-lg" aria-hidden="true"></i></NavItem>
						<NavItem href="https://github.com/ztoben"><i className="fa fa-github-square fa-lg" aria-hidden="true"></i></NavItem>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		);
	}
}

export default Header;