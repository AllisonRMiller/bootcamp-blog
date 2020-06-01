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
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';


const Landing = (props) => {


    return (
        <div id="overlay" className="mt-5 pt-2">
                    <Container className="mt-5 pt-5">
            <Row>
                <Col >
                        <Card className="mt-5">
                        <CardTitle className="ml-2">
                            <h4>Allison R. Miller</h4>
                        </CardTitle>
                        <CardSubtitle className="ml-2">
                            Graduate Awesome, Inc Bootcamp Spring 2020<br />
                            Graduate University of Kentucky 2008<br />
                            Full stack developer
                            Available for hire
                        </CardSubtitle>
                            <CardBody>
                            <CardText>
                                <p>I like to say my first paying job was installinxg a dialup modem for a friend's family in elementary school. Throughout my education and my career I've remained the tutor and the tech even when it wasn't in my title.</p>
                            </CardText>
                            </CardBody>
                            <CardFooter className="text-center">
                            <FontAwesomeIcon icon={faLinkedinIn} className="ml-2 mr-2" />
                            <FontAwesomeIcon icon={faGithub} className="mr-2" />
                            <FontAwesomeIcon icon={faInstagram} className="mr-2" />
                            <span className="iconify" data-icon="simple-icons:codewars" data-inline="false"></span>
                            <FontAwesomeIcon icon={faEnvelope} className="ml-2 mr-2"/>
                            </CardFooter>
                        </Card>
                </Col>
                <Col>

                            <Card className="mt-5">
                            <CardText>Placeholder</CardText>
                            <CardImg right="true" src=""></CardImg>
                            </Card>
                </Col>
            </Row>
                    </Container>

        </div>
    )

}

export default Landing;