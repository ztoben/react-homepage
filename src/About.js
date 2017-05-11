import React, { Component } from 'react';
import aboutImage from '../public/img/about.jpg'
import './style/About.css';

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

class About extends Component {
	render() {
		return (
			<div className="about" name="About">
				<div className="aboutImage col-sm-6">
					<AboutImage />
				</div>
				<div className="aboutInfo col-sm-5">
					<h1>Hello!</h1>
					<p>My name is Zachary Toben, I'm a full stack web developer currently living in Des Moines, Iowa.</p>
					<p>I love to develop and have been fascinated with computers and electronics from a young age. I'm always looking for a challenge or something new.</p>
					<p>My current interests in software development are JavaScript, Node, React, C#, and .Net.</p>
				</div>
			</div>
		);
	}
}

export default About;