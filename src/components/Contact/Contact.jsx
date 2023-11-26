import '../Home/Home.css'
import React from "react";
import { Container, Col, Row } from "react-bootstrap";
const Contact = () => {
    return(
        <>
          <section className="contact">
                <div>
                    <Container>
                        <Row>
                            <Col xs={12} md={6} className='one d-flex align-items-center justify-content-center'>
                                <div className="two">
                                <p className='three'>KONTAKT OSS</p>
                                <div className='contacttoptext'>Get in touch with us</div>
                                </div>
                            </Col>
                            <Col xs={12} md={6} className='four'>
                            <img src={require('../../assets/computer.jpg')} alt='computertyping' style={{backgroundSize: 'contain', backgroundPosition: 'center', height: '30vh', borderRadius: '15px' }}/>
                            </Col>
                        </Row>
                    </Container>
                </div>
                </section>
                    <div className='contactemailform'>
                        <Row>
                            <Col xs={12} md={6} className='footer-column d-flex align-items-center justify-content-center'>
                                <div className="footer-first">
                                <div className='contacttouch'>Want to get in touch?</div>
                                <div>Send us a quick email and we will get back to you as soon as possible</div>
                                </div>
                            </Col>
                            <Col xs={12} md={6} className='footer-column'>
                                <div className="footer-separator">
                                <a href="mailto:info@nexergroup.com" className="contact-email">stesh@contact.com</a>
                                </div>
                            </Col>
                        </Row>
                        </div>

                        <div>
                          
                        </div>
 
            




    {/* <section className='top-container contactus'>
        <h1 className='contactheader'>Kontakt Oss</h1>
        <p className='contacttext'>Vill du ta nästa steg i din karriär?
Har du en yrkesambition i åtanke och skulle vilja ha en konsultation?
Tveka inte att kontakta oss, så kommer vi att vägleda dig åt rätt håll:
bestcolorisred@stesh.se
| +46 (0) 123 45 67 89" </p>
         */}




        {/* <div form-container>
      <form action="#" method="post">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" maxLength="25" required /><br /><br />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" maxLength="18" required /><br /><br />

        <label htmlFor="phone">Phone:</label>
        <input type="tel" id="phone" name="phone" maxLength="12" required /><br /><br />

        <label htmlFor="message">Message (max 30 characters):</label><br />
        <textarea id="message" name="message" maxLength="30" rows="4" required></textarea><br /><br />

        <input type="submit" value="Submit" />
      </form>
    </div> */}
    
    {/* </section> */}
        </>
    )
};
export default Contact