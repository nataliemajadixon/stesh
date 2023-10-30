import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../Home/Home.css'
const Navbars = () => {

    // const navEl = document.querySelector('.navbar');

    // window.addEventListener('scroll', () => {
    //     if (window.scrollY >= 56) {
    //         navEl.classList.add('navbar-scrolled')
    //     }
    // })

    return (
        <>
        <Navbar bg="dark" data-bs-theme="dark" className='navbar topnavbar navbar-scrolled' expand="lg" sticky="top" >
            <Container fluid>
                <Navbar.Brand href="/" className="m-auto" style={{fontSize: '30px', paddingLeft: "30px"}}> Stesh</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="ms-auto navigation">
                                <Nav.Link href="/services" className="px-3" >Tjänster</Nav.Link>
                                <Nav.Link href="/career" className="px-3">Karriär</Nav.Link>
                                <Nav.Link href="/contact" className="px-3">Kontakt</Nav.Link>
                                <Nav.Link href="/about" className="px-3">Om Oss</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                </Container>
      </Navbar>
        </>
    )
}

export default Navbars;