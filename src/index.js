import React from 'react';
import ReactDOM from 'react-dom';
import About from './components/About';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Header from './components/Header';
import Footer from './components/Footer';
import './style/index.scss';

const navItems = ['About', 'Resume', 'Contact'];

ReactDOM.render(
	<div>
		<Header items={navItems}/>
		<About />
		<Resume />
		<Contact />
		<Footer />
	</div>,
	document.getElementById('app')
);

module.hot.accept();
