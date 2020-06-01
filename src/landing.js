import React, {useState} from 'react';
import {
    Container,
Row,
Col,
Card,
CardBody,
CardFooter,
CardImg,
CardTitle,
CardText,
CardSubtitle
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';
import Proto from './prophoto.png';


const Landing = (props) => {


    return (
        <div id="overlay" className="mt-5 pt-2">
                    <Container className="mt-5 pt-5">
            <Row>
            <Col className="col-md-1"></Col>
                <Col className="col-md-6">
                        <Card className="mt-5">
                        <CardTitle className="ml-2 mt-2">
                            <h4>Allison R. Miller</h4>
                        </CardTitle>
                        <CardSubtitle className="ml-2">
                            Graduate Awesome, Inc Bootcamp Spring 2020<br />
                            Graduate University of Kentucky 2008<br />
                            Full stack developer<br />
                            Available for hire
                        </CardSubtitle>
                            <CardBody>
                            <CardText>
                                <p>Trained in HTML, CSS, JS, Reactjs, MySql, PHP, and Laravel.<br/>
                                    Years of experience in troubleshooting, repair, and management.<br/>
                                    
                                </p>
                            </CardText>
                            </CardBody>
                            <CardFooter className="text-center">
                            <FontAwesomeIcon href="" icon={faLinkedinIn} className="ml-2 mr-3" />
                            <FontAwesomeIcon href="https://github.com/AllisonRMiller" icon={faGithub} className="mr-3" />
                            <FontAwesomeIcon href="https://www.instagram.com/stormcalled/" icon={faInstagram} className="mr-3" />
                            <span href="https://www.codewars.com/users/ARMiller" className="iconify" data-icon="simple-icons:codewars" data-inline="false"></span>
                            </CardFooter>
                        </Card>
                </Col>
                <Col className="col-md-3">

                            <Card className="mt-4 bg-primary">
                            <img className="thumbnail" id="proselfie" src={Proto}></img>
                            </Card>
                </Col>
            </Row>
                    </Container>

        </div>
    )

}

export default Landing;