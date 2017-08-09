import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import './css/Resume.css';

class Resume extends Component {
    render() {
        return (
            <div className="resume">
                <h1>Resume</h1>
                <hr />
                <div className="col-md-6 col-xs-12 resume-col">
                    <h4>Work Experience</h4>
                    <p><b>Product Engineer II (January 2017 - Present)</b></p>
                    <p>John Deere, Urbandale, Iowa</p>

                    <p><b>Contract Software Developer (July 2016 - Present)</b></p>
                    <p>Heartland AEA, Johnston, Iowa</p>

                    <p><b>It Analyst III (November 2015 - December 2016)</b></p>
                    <p>John Deere, Urbandale, Iowa</p>

                    <p><b>Computer Software Engineer (July 2014 - October 2015)</b></p>
                    <p>Heartland AEA, Johnston, Iowa</p>
                </div>
                <div className="col-md-6 col-xs-12 resume-col">
                    <h4>Education</h4>
                    <p><b>University of Northern Iowa (2014)</b></p>
                    <p>Bachelor of Arts (BA), Computer Science</p>
                </div>
                <div className="col-md-12 resume-dl">
                    <form method="get" action={process.env.PUBLIC_URL + '/resume.doc'}>
                        <Button bsSize="large" type="submit" block>Full Resume</Button>
                    </form>
                </div>
            </div>
        );
    }
}

export default Resume;