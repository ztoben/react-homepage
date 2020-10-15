import {hot} from 'react-hot-loader/root';
import React, {Component} from 'react';
import Header from './Header';
import About from './About';
import Resume from './Resume';
import Contact from './Contact';
import Footer from './Footer';
import '../style/Index.scss';

const navItems = ['About', 'Resume', 'Contact'];

class App extends Component {
  render() {
    return (
      <div>
        <Header items={navItems} />
        <About />
        <Resume />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default hot(App);
