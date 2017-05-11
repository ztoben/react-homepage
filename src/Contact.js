import React, { Component } from 'react';
import NavBox from './components/NavBox';
import './style/Contact.css';

class Contact extends Component {
    render() {
        const navBoxLinks = [{
            link: "www.google.com",
            text: "Some text",
            icon: "fa fa-twitter-square fa-5x"
        }];

        return (
            <div className="contact">
                <h1>Contact</h1>
                <div>
                    <NavBox links={navBoxLinks}/>
                </div>
            </div>
        );
    }
}

// links: React.PropTypes.arrayOf(React.PropTypes.shape({
//         link: React.PropTypes.string,
//         header: React.PropType.string,
//         text: React.PropType.string
//     }))

export default Contact;