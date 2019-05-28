import React, {Component, Fragment} from 'react';
import resume from '../../public/resume.pdf';
import '../style/Resume.scss';

class Resume extends Component {
  render() {
    return (
      <Fragment>
        <div className="resume">
          <hr />
          <div className="col-lg-4 col-xs-12 resume-col">
            <h4>Work Experience</h4>
            <p>
              <b>Software Engineer (April 2018 - Present)</b>
            </p>
            <p>Gain Compliance, Des Moines, Iowa</p>

            <p>
              <b>Contract Software Developer (September 2017 - March 2018)</b>
            </p>
            <p>Pioneer, Johnston, Iowa</p>

            <p>
              <b>Product Engineer II (January 2017 - October 2017)</b>
            </p>
            <p>John Deere, Urbandale, Iowa</p>

            <p>
              <b>Contract Software Developer (July 2016 - March 2017)</b>
            </p>
            <p>Heartland AEA, Johnston, Iowa</p>

            <p>
              <b>It Analyst III (November 2015 - December 2016)</b>
            </p>
            <p>John Deere, Urbandale, Iowa</p>

            <p>
              <b>Computer Software Engineer (July 2014 - October 2015)</b>
            </p>
            <p>Heartland AEA, Johnston, Iowa</p>
          </div>
          <div className="col-lg-4 col-xs-12 resume-col">
            <h4>Education</h4>
            <p>
              <b>University of Northern Iowa (2014)</b>
            </p>
            <p>Bachelor of Arts (BA), Computer Science</p>
          </div>
          <div className="col-md-4 col-xs-12 resume-col">
            <h4>Certifications</h4>
            <p>
              <b>Certified Scrum Master</b>
            </p>
            <p>Scrum Alliance (April 2017 - Present)</p>
          </div>
        </div>
        <div className="col-md-12 resume-dl">
          <form method="get" action={resume}>
            <button className="resume-button" type="submit">
              Full Resume
            </button>
          </form>
        </div>
        <hr />
      </Fragment>
    );
  }
}

export default Resume;
