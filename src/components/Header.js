import React, {Component} from 'react';
import PropTypes from 'prop-types';
import '../style/Header.scss';

class Header extends Component {
  render() {
    return (
      <div className="header">
        <p className="banner-large">Zach Toben</p>
      </div>
    );
  }
}

Header.propTypes = {
  items: PropTypes.array,
};

Header.DefaultProps = {
  items: [],
};

export default Header;
