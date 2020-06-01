import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    Nav,
    NavItem,
    NavLink,
    Container,
    Row,
    Col
} from 'reactstrap';


const TopNav = (props) => {

    const [isOpen, setIsOpen] = useState(false);


    const toggle = () => setIsOpen(!isOpen);

    return (
        <Row>
            <Col className="col-md-12">
                <Navbar dark expand="md" fixed="top" className="bg-primary" >
                    <NavbarToggler onClick={toggle} />
                    <Collapse isOpen={isOpen} navbar className="justify-content-center">
                        <Nav navbar>
                            <NavItem>
                                <NavLink href="/"><h5>Home</h5></NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/blog"><h5>Blog</h5></NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/portfolio"><h5>Portfolio</h5></NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </Col>
        </Row>
    );

}

export default TopNav;