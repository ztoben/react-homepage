import React from 'react';
import ReactDOM from 'react-dom';
import About from './About';
import Resume from './Resume';
import Contact from './Contact';
import Header from './Header';
import Footer from './Footer';
import SlideNav from './SlideNav';
import './css/index.css';

const navItems = ['About', 'Resume', 'Contact'];

ReactDOM.render(
	<div>
		<SlideNav items={navItems}/>
		<Header items={navItems}/>
		<About />
		<Resume />
		<Contact />
		<Footer />
	</div>,
	document.getElementById('app')
)