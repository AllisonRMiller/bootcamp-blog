import React, { useState } from 'react';
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
    Collapse,
    Navbar,
    NavbarToggler,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenNib } from '@fortawesome/free-solid-svg-icons';
import blogRaw from './blog.json';


const Blog = (props) => {
    const [entry, setEntry] = useState(1)
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    const blogParsed = JSON.parse(JSON.stringify(blogRaw));

    console.log(blogParsed);
    console.log(blogParsed.length);

    // const changeEntry = (e,title) => {
    //     e.target.preventDefault()
    // }

    const generateSideNav = (x) => {


        var title = x.title;
        var week = x.week
        return (<DropdownItem>
            <NavLink onClick={() => setEntry( week)} key={week} id={title}>{title}</NavLink>
        </DropdownItem>)
    }

    const post = entry < 5? blogParsed.prework.find(x=>x.week ==entry ) : blogParsed.class.find(x=>x.week ==entry)
    const postText = (x) => {
        return (
            <p>{x}</p>
        )
    }


    return (
        <Container className="mt-5 pt-5"><Row >
            {/* <Col>
        <Container><Row> */}
            <Col className="col-md-3">
                <Navbar dark color="primary" vertical="true" expand="md" className="text-light mt-5 ml-0 pt-5">
                    <NavbarToggler onClick={toggle} />
                    <Collapse isOpen={isOpen} navbar>
                        <Nav dark  color="primary" className="mx-auto text-light flex-sm-column pb-3 mb-2">


                            <UncontrolledDropdown direction="right" className="mb-2">
                                <DropdownToggle nav caret id="preDrop">
                                    Prework
      </DropdownToggle>
                                <DropdownMenu>
                                    {blogParsed.prework.map(x => generateSideNav(x))}

                                </DropdownMenu>
                            </UncontrolledDropdown>
                            <UncontrolledDropdown direction="right" className="mb-2">
                                <DropdownToggle nav dark caret id="classDrop">
                                    Class
      </DropdownToggle>
                                <DropdownMenu>
                                    {blogParsed.class.map(x => generateSideNav(x))}
                                </DropdownMenu>
                            </UncontrolledDropdown>
                        </Nav>
                    </Collapse>
                </Navbar>
                {/* </Col>
        
          </Row>


          </Container>         */}
            </Col>
            <Col>
                <Container className="mt-5">
                    <Row>
                        <Col>
                            <Card>
                                <CardTitle className="text-center mt-4"><h5>{post.title}</h5></CardTitle>
                                <CardBody>
                                <CardText>{post.content.map(x=> postText(x))}</CardText>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </Col>
        </Row>
        </Container>
    );

}

export default Blog;