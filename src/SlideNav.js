import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Menu from 'react-burger-menu';
import './style/SlideNav.css';

class SlideNav extends Component {
    constructor(props) {
        super(props);
        this.state = { show: false };
    }
    handleClick = () => {
        this.setState({ 'show': false });
    }
    getSlideItem = (item, i) => {
        return (
            <a
                onClick={this.handleClick}
                key={"slideNav_" + i}
                id={"nav-" + item}
                className="menu-item"
                href={"#" + item}>{item}
            </a>
        );
    }
    render() {
        return (
            <Menu.slide isOpen={this.state.show}>
                {this.props.items.map((item, i) => {
                    return this.getSlideItem(item, i);
                })}
            </Menu.slide>
        );
    }
};

SlideNav.propTypes = {
    items: PropTypes.array
}

SlideNav.defaultProps = {
    items: []
}

export default SlideNav;