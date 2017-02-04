import React, { Component } from 'react';
var Menu = require('react-burger-menu').slide;
import './SlideNav.css';

class SlideNav extends Component {
    render() {
        return (
            <Menu>
                <a id="nav-home" className="menu-item" href="#Portfolio">Portfolio</a>
                <a id="nav-about" className="menu-item" href="#About">About</a>
                <a id="nav-contact" className="menu-item" href="#Resume">Resume</a>
                <a id="nav-contact" className="menu-item" href="#Contact">Contact</a>
            </Menu>
        );
    }
};

export default SlideNav;