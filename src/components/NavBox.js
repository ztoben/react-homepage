import React, { Component } from 'react';
import '../style/NavBox.css';

class NavBox extends Component {
    buildNavBoxItems = (links) => {
        return links.map((item, i) => {
            return (
                <div key={"navBoxItem_" + i} className="navBox col-sm-3 centered">
                    <i className={item.icon} aria-hidden="true"></i>
                    <h4>{item.text}</h4>
                </div>
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