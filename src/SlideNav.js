import React, { Component } from 'react';
var Menu = require('react-burger-menu').slide;
import './style/SlideNav.css';

class SlideNav extends Component {
    constructor(props) {
        super(props);
        this.state = {show: false};
    }
    handleClick = () => {
        this.setState({'show': false});
    }
    render() {
        return (
            <Menu isOpen={this.state.show}>
                <a onClick={this.handleClick} id="nav-about" className="menu-item" href="#About">About</a>
                <a onClick={this.handleClick} id="nav-contact" className="menu-item" href="#Resume">Resume</a>
                <a onClick={this.handleClick} id="nav-projects" className="menu-item" href="#Projects">Projects</a>
                <a onClick={this.handleClick} id="nav-contact" className="menu-item" href="#Contact">Contact</a>
            </Menu>
        );
    }
};

export default SlideNav;