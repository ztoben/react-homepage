import React, { Component } from 'react';
import '../font-awesome/css/font-awesome.min.css'
import './style/Footer.scss';

class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <p>
                    &copy; Toben Development 2018
                </p>
            </div>
        );
    }
}

export default Footer;