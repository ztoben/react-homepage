import React from 'react';
import ReactDOM from 'react-dom';
import About from './About';
import Resume from './Resume';
import Projects from './Projects';
import Contact from './Contact';
import Header from './Header';
import Footer from './Footer';
import SlideNav from './SlideNav';
import './style/index.css';

const navItems = ['About', 'Contact', 'Projects', 'Contact'];

ReactDOM.render(
	<div>
		<SlideNav items={navItems}/>
		<Header items={navItems}/>
		<About />
		<Resume />
		<Projects />
		<Contact />
		<Footer />
	</div>,
	document.getElementById('app')
)