import React, {Component} from 'react';
import PropTypes from 'prop-types';
import '../style/NavBox.scss';

class NavBox extends Component {
  buildNavBoxItems = links => {
    return links.map((item, i) => {
      return (
        <span
          key={'navBoxItem_' + i}
          className="navBox-container col-md-3 col-sm-6 col-xs-12 centered"
        >
          <div className="navBox">
            <a href={item.link}>
              <span className="link-spanner" />
            </a>
            <i className={item.icon} aria-hidden="true" />
            <h4>{item.text}</h4>
          </div>
        </span>
      );
    });
  };

  render() {
    return <div>{this.buildNavBoxItems(this.props.links)}</div>;
  }
}

NavBox.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      link: PropTypes.string,
      text: PropTypes.string,
      icon: PropTypes.string,
    })
  ),
};

NavBox.defaultProps = {
  links: [
    {
      link: '',
      text: '',
      icon: '',
    },
  ],
};

export default NavBox;
