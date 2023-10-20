import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../Home/Home.css'
const Navbars = () => {
    return (
        <>
        <Navbar className='topnavbar' expand="lg" sticky="top" style={{backgroundColor: '#f50707', color: 'white'}} >
            <Container fluid>
                <Navbar.Brand href="/"> Stesh
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="ms-auto navigation">
                                <Nav.Link href="/services" className="px-3" >Services</Nav.Link>
                                <Nav.Link href="/career" className="px-3">Career</Nav.Link>
                                <Nav.Link href="/contact" className="px-3">Contact</Nav.Link>
                                <Nav.Link href="/about" className="px-3">About Us</Nav.Link>

            
                            </Nav>
                        </Navbar.Collapse>
                </Container>
      </Navbar>
        </>
    )
}

export default Navbars;