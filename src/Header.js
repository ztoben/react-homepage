import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './style/Header.scss';

class Header extends Component {
	// render() {
	// 	return (
     //        <Navbar name="Portfolio" inverse collapseOnSelect>
     //            <Navbar.Header>
     //                <Navbar.Brand>
     //                    <p className="banner-large">Zach Toben</p>
     //                </Navbar.Brand>
     //            </Navbar.Header>
     //        </Navbar>
	// 	);
	// }

    render() {
        return (
            <div className="header">
				<p className="banner-large">Zach Toben</p>
            </div>
        );
    }
}

Header.propTypes = {
	items: PropTypes.array
};

Header.DefaultProps = {
	items: []
};

export default Header;