import React, { Component } from 'react';
import '../style/NavBox.css';

class NavBox extends Component {
    buildNavBoxItems = (links) => {
        return links.map((item, i) => {
            return (
                <span key={"navBoxItem_" + i} className="navBox-container col-md-3 col-sm-6 col-xs-12 centered">
                    <div className="navBox">
                        <a href={item.link}>
                            <span className="link-spanner"></span>
                        </a>
                        <i className={item.icon} aria-hidden="true"></i>
                        <h4>{item.text}</h4>
                    </div>
                </span>
            );
        });
    }

    render() {
        return (
            <div>
                {this.buildNavBoxItems(this.props.links)}
            </div>
        )
    }
}

NavBox.propTypes = {
    links: React.PropTypes.arrayOf(React.PropTypes.shape({
        link: React.PropTypes.string,
        text: React.PropTypes.string,
        icon: React.PropTypes.string
    }))
}

NavBox.defaultProps = {
    links: [{
        link: "",
        text: "",
        icon: ""
    }]
}

export default NavBox;