import '../Home/Home.css'
import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import { useState } from 'react';
import { send } from 'emailjs-com';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';

const Contact = () => {

    const [toSend, setToSend] = useState({
        from_name: '',
        last_name: '',
        email: '',
        phone_number: '',
        message: '',
        
      });
      const onSubmit = (e) => {
        e.preventDefault();
        send(
            'service_g65arvi',
            'template_eukgb29',
            toSend,
            'JRmQG7plBN3DQWusY'
          )
            .then((response) => {
              console.log('SUCCESS!', response.status, response.text);
            })
            .catch((err) => {
              console.log('FAILED...', err);
            });
        };
       
      const handleChange = (e) => {
        setToSend({ ...toSend, [e.target.name]: e.target.value });
      };
    
    
      const popover = (
        <Popover id="popover-basic">
          <Popover.Header as="h3">Your message has been sent!</Popover.Header>
          <Popover.Body>
             <strong>Awesome!</strong> We will be in touch!
            
          </Popover.Body>
        </Popover>
      );


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
                                <div className='testingemail'>
                            
                               <form className="formcontact" onSubmit={onSubmit}>
                      
                               <div class="form-group col-md-6">
                               <label for="formName">First Name</label>
                          <input type="text" className="form-control" name='from_name' id="formName" placeholder="First Name" value={toSend.from_name}
                          onChange={handleChange}/>
                        </div>

                        <div class="form-group col-md-6">
                        <label for="last">Last Name</label>
                          <input type="text" className="form-control" name='last_name' id="last" placeholder="Last Name" value={toSend.last_name}
                          onChange={handleChange}/>
                        </div>

                        <div class="form-group col-md-6">
                        <label for="emails">Email</label>
                          <input type="text" className="form-control" name='email' id="emails" placeholder="Email" value={toSend.email}
                          onChange={handleChange}/>
                        </div>

                        <div class="form-group col-md-6">
                        <label for="phone">Phone Number</label>
                          <input type="text" className="form-control" name='phone_number' id="phone" placeholder="Phone Number" value={toSend.phone_number}
                          onChange={handleChange}/>
                        </div>

                              
                        <div class="form-group col-md-6 ">
                        <label for="formMessage">Message</label>
                        <textarea className="form-control" cols="40" rows="5" id="formMessage"  name='message' placeholder="Message"  value={toSend.message}
                          onChange={handleChange}></textarea>
                          
                        </div>
                        
                        <OverlayTrigger trigger="click" placement="right" overlay={popover}>
                      <button className="messagesubmit" type='submit' id='submit'>Send Message</button>
                      </OverlayTrigger>
                      
                      
                      </form>
                      
                                                   </div>
                                </div>
                            </Col>
                            {/* <Col xs={12} md={6} className='footer-column'>
                                <div className="footer-separator">
                                <a href="mailto:info@nexergroup.com" className="contact-email">stesh@contact.com</a>
                                </div>
                            </Col> */}
                        </Row>
                        </div>

                        <div className='testingemail'>
                            
      <h6 style={{color: 'white', paddingTop: '60px'}}>Get in Touch</h6>
        <h1 style={{color: 'white',paddingBottom: '60px'}}>Contact Me</h1>

        <h4 style={{color: 'white', paddingBotton: '20px'}}>Send a Message</h4>
        
         <form className="formcontact" onSubmit={onSubmit}>

         <div class="form-group col-md-6">
    
    <input type="text" className="form-control" name='from_name' id="formName" placeholder="Name" value={toSend.from_name}
    onChange={handleChange}/>
  </div>

        
  <div class="form-group col-md-6 ">
  <textarea className="form-control" cols="40" rows="5" id="formMessage"  name='message' placeholder="Message"  value={toSend.message}
    onChange={handleChange}></textarea>
    
  </div>
  
  <OverlayTrigger trigger="click" placement="right" overlay={popover}>
<button className="messagesubmit" type='submit' id='submit'>Send Message</button>
</OverlayTrigger>


</form>

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