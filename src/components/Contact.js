import React, {Component} from 'react';
import NavBox from './NavBox';
import '../style/Contact.scss';

class Contact extends Component {
  render() {
    const navBoxLinks = [
      {
        link: 'mailto:zach.toben@gmail.com?Subject=Hello!',
        text: 'Email Me!',
        icon: 'fa fa-envelope-square fa-5x',
      },
      {
        link: 'http://www.github.com/ztoben',
        text: 'Github',
        icon: 'fa fa-github-square fa-5x',
      },
      {
        link: 'https://www.linkedin.com/in/zachary-toben-bbab4a84',
        text: 'LinkedIn',
        icon: 'fa fa-linkedin-square fa-5x',
      },
      {
        link: 'http://www.twitter.com/ztoben',
        text: 'Twitter',
        icon: 'fa fa-twitter-square fa-5x',
      },
    ];

    return (
      <div className="contact" id="Contact">
        <h1>Contact</h1>
        <NavBox links={navBoxLinks} />
      </div>
    );
  }
}

export default Contact;
