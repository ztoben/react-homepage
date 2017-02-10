import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import '../font-awesome/css/font-awesome.min.css'
import './style/Footer.css';

class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <Grid>
                    <Row>
                        <Col sm={2} xs={4} smOffset={3}>
                            <div className="footerIcon">
                                <a href="https://twitter.com/ztoben"> <i className="fa fa-twitter-square fa-lg" aria-hidden="true"></i> Twitter</a>
                            </div>
                        </Col>
                        <Col sm={2} xs={4}>
                            <div className="footerIcon">
                                <a href="https://www.linkedin.com/in/zachary-toben-bbab4a84"><i className="fa fa-linkedin-square fa-lg" aria-hidden="true"></i> LinkedIn</a>
                            </div>
                        </Col>
                        <Col sm={2} xs={4}>
                            <div className="footerIcon">
                                <a href="https://github.com/ztoben"><i className="fa fa-github-square fa-lg" aria-hidden="true"></i> Github</a>
                            </div>
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}

export default Footer;