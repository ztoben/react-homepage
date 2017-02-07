import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import Media from 'react-media';
import './style/Header.css';



class Header extends Component {
	pullRight = () => {
		return (
			<Media query={{ maxWidth: 1000 }}>
				{matches => matches ? (
					<Nav>
						<NavItem href="#About">About</NavItem>
						<NavItem href="#Resume">Resume</NavItem>
						<NavItem href="#Projects">Projects</NavItem>
						<NavItem href="#Contact">Contact</NavItem>
					</Nav>
				) : (
					<Nav pullRight>
						<NavItem href="#About">About</NavItem>
						<NavItem href="#Resume">Resume</NavItem>
						<NavItem href="#Projects">Projects</NavItem>
						<NavItem href="#Contact">Contact</NavItem>
					</Nav>
				)}
			</Media>
		)
	}
	render() {
		return (
			<Navbar name="Portfolio" inverse collapseOnSelect>
				<p className="banner-large">Zach Toben</p>
				<Navbar.Collapse>
					{this.pullRight()}
				</Navbar.Collapse>
			</Navbar>

		);
	}
}

export default Header;