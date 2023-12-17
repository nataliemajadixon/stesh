import { Container, Col, Row } from "react-bootstrap";
import '../Home/Home.css';

const Footer = () => {
    return (
        <>
            <section className="footer">
                <div>
                    <Container>
                        <Row>
                            <Col xs={12} md={6} className='footer-column'>
                                <div className="footer-first">
                                <p className='bottomheaders'>KONTAKT OSS</p>
                                <button className="footer-button">
                                    <a href="mailto:info@nexergroup.com" className="footer-link">stesh@contact.com</a>
                                </button>
                                </div>
                                {/* <p><a className='bottomlinks' href='/contact'>E-post</a></p>
                                <p><a className='bottomlinks' href='/contact'>Telefon</a></p> */}
                            </Col>
                            <Col xs={12} md={6} className='footer-column'>
                                <div className="footer-separator">
                                <p className='bottomheaders fontlogo'>STESH</p>
                                <p><a className='bottomlinks' href='/about'>Om Oss</a></p>
                                <p><a className='bottomlinks' href='/contact'>Kontakta Oss</a></p>
                                <p><a className='bottomlinks' href='/career'>Karriär</a></p>
                                </div>
                           
                     
                            </Col>
                        </Row>
                    </Container>
                </div>
            </section>
        </>
    );
};

export default Footer;
