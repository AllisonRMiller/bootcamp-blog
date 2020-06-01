import React from 'react';
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
CardSubtitle,
Button,
CardColumns
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudMoonRain, faHiking, faWineBottle, faList, faPuzzlePiece, faBrain, faPenNib } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';


const Portfolio = (props) => {


    return (
        <>
        <Container className="mt-5 pt-5 mb-3">
            <Row>
                <Col>
                <Container className="mt-4 mb-3 mw-25 p-2 bg-primary text-light"><h3 className="text-center">Currently Available</h3></Container>
                    <CardColumns>
                    <Card>
                        <CardTitle>
                            <h4 className="text-center">Bootcamp Blog</h4>
                        </CardTitle>
                        <CardBody>
                            <CardText>
                                <p>A blog and portfolio showcase. The website you are currently viewing.</p>
                                <p>Reactjs, Bootstrap, CSS, JS</p>
                            </CardText>
                            <CardText className="text-center">
                            <Button color="link"><FontAwesomeIcon icon={faGithub}/></Button>
                            <Button color="link"><FontAwesomeIcon icon={faPenNib}/></Button>
                            </CardText>
                        </CardBody>
                        
                    </Card>

                    <Card>
                        <CardTitle>
                        <h4 className="text-center">Trailfinder</h4>
                        </CardTitle>
                        <CardBody>
                            <CardText>
                                <p>A hiking trail search and storage site.  Final project for Awesome Inc's Spring 2020 Bootcamp.  Work ongoing.</p>
                                <p>Reactjs, Laravel, Bootstrap</p>
                            </CardText>
                            <CardText className="text-center">
                            <Button color="link"><FontAwesomeIcon icon={faGithub}/></Button>
                            <Button color="link"><FontAwesomeIcon icon={faHiking}/></Button>
                            </CardText>
                        </CardBody>
                    </Card>

                    <Card>
                        <CardTitle>
                            <h4 className="text-center">Tempest Prognosticator</h4>
                        </CardTitle>
                        <CardBody>
                            <CardText>
                                <p>A stripped-down weather app. Clean and easy to use.</p>
                                <p>Reactjs, Bootstrap</p>
                            </CardText>
                            <CardText className="text-center">
                            <Button color="link"><FontAwesomeIcon icon={faGithub}/></Button>
                            <Button color="link"><FontAwesomeIcon icon={faCloudMoonRain}/></Button>
                            </CardText>
                        </CardBody>
                    </Card>

                    <Card>
                        <CardTitle>
                        <h4 className="text-center">Taskmaster</h4>
                        </CardTitle>
                        <CardBody>
                            <CardText>
                                <p>Simple to-do list.</p>
                            </CardText>
                            <CardText className="text-center">
                            <Button color="link"><FontAwesomeIcon icon={faGithub}/></Button>
                            <Button color="link"><FontAwesomeIcon icon={faList}/></Button>
                            </CardText>
                        </CardBody>
                    </Card>

                    <Card>
                        <CardTitle>
                        <h4 className="text-center">Juniper Road</h4>
                        </CardTitle>
                        <CardBody>
                            <CardText>
                                <p>Mock menu page for a fictitious restaurant.</p>
                                <p>Reactjs, Bootstrap</p>
                            </CardText>
                            <CardText className="text-center">
                            <Button color="link"><FontAwesomeIcon icon={faGithub}/></Button>
                            <Button color="link"><FontAwesomeIcon icon={faWineBottle}/></Button>
                            </CardText>
                        </CardBody>
                    </Card>

                    <Card>
                        <CardTitle>
                        <h4 className="text-center">Mindgames</h4>
                        </CardTitle>
                        <CardBody>
                            <CardText>
                                <p>Mindreader math game.</p>
                                <p>Reactjs, Bootstrap</p>
                            </CardText>
                            <CardText className="text-center">
                                <Button color="link"><FontAwesomeIcon icon={faGithub}/></Button>
                            <Button color="link"><FontAwesomeIcon icon={faBrain}/></Button>

                            </CardText>
                            </CardBody>
                    </Card>
</CardColumns>


                </Col>
            </Row>
            
        </Container>
        <Container>
            <Row>
                <Col>
                    <Container className="mt-3 mb-3 mw-25 p-2 bg-primary text-light"><h3 className="text-center">Coming Soon</h3></Container>
                    <CardColumns>
                    <Card>
                        <CardTitle>
                        <h4 className="text-center">MorenBot</h4>
                        </CardTitle>
                        <CardBody>
                            <CardText>
                                <p>A themed starboard bot for Discord. Currently in planning.</p>
                                <p>JS</p>
                            </CardText>

                        </CardBody>
                    </Card>
                    </CardColumns>
                </Col>
            </Row>
        </Container>

        </>
    )
}

export default Portfolio;