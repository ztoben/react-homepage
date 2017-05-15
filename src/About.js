import React, { Component } from 'react';
import aboutImage from '../public/img/about.jpg'
import './css/About.css';

const BuildTags = (tags) => {
	return tags.map(tag => {
		return (
			<div
				className='tag-container'
				key={tag}
			>
				{tag}
			</div>
		);
	});
}

class About extends Component {
	render() {
		return (
			<div className='about' name='About'>
				<div className='aboutImage col-sm-6'>
					<img
						src={aboutImage}
						className='img-circle'
						alt='About'
						width='300'
					/>
				</div>
				<div className='aboutInfo col-sm-6'>
					<h1>Hello!</h1>
					<p>My name is Zachary Toben, I'm a full stack web developer currently living in Des Moines, Iowa.</p>
					<p>I love to develop and have been fascinated with computers and electronics from a young age. I'm always looking for a challenge or something new.</p>
					<p>My current interests in software development are:</p>
					{BuildTags(['JavaScript', 'Node', 'React', 'C#', '.Net', 'AWS', 'Docker'])}
				</div>
			</div>
		);
	}
}

export default About;