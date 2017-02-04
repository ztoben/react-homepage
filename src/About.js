import React, { Component } from 'react';
import aboutImage from '../public/img/about.jpg'
import './About.css';

class About extends Component {
	render() {
		return (
			<div className="about" name="About">
				<div className="aboutImage col-sm-6">
					<AboutImage />
				</div>
				<div className="aboutInfo col-sm-6">
					<p>About</p>
				</div>
			</div>
		);
	}
}

const AboutImage = () => {
	return (
		<img
			src={aboutImage}
			className="img-circle"
			alt="About"
			width="300"
			/>
	);
};

export default About;