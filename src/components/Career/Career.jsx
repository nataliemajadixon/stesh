import '../Home/Home.css'
import React from "react";
import { Col, Row } from "react-bootstrap";
import { useState } from 'react';
import { send } from 'emailjs-com';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';

const Career = () => {

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
       <div className="kareer-background">
        <img src={require('../../assets/career.jpg')} alt='vrheadset' />
        <div className="overlay">
          <div className="top-kontainer kareer-container">
            <div className="kareeruscon">
              <div className="kareerusheader">BLI EN AV OSS</div>
              <div className="kareerustext">
                Känns det här som en arbetsplats där du skulle bidra med något nytt, trivas och utvecklas? I så fall, ansök till en av våra lediga tjänster!
              </div>
              <a href="#spontanansokan" className="show-vacancies-btn">Show Job Vacancies</a>
            </div>
          </div>
        </div>
      </div>

        <div>

        <div className='kareer-middle-text'>
                        <Row>
                            <Col xs={12} md={6} className='d-flex align-items-center justify-content-center'>
                                <div className="footer-firstone">
                                <div>At Stesh, we invite you to embark on a rewarding career journey defined by innovation, collaboration, and continuous growth. As a part of our dynamic team, you'll 
                                    contribute to transformative projects, working at the forefront of cutting-edge solutions for our clients. We value the unique talents and perspectives each team member brings,
                                     fostering an environment where creativity flourishes, and ideas thrive. Your professional development is a priority at Stesh, and we're dedicated to providing the support
                                     and opportunities you need to excel. Join us at Stesh, where every day is an opportunity to make a lasting impact in the world of consulting.
                                     At Stesh, we believe in the power of exceptional talent to drive success. As a dynamic and innovative consulting firm, we are committed to building a team of dedicated 
                                     professionals who share our passion for solving complex
                                      challenges and making a meaningful impact. Want to join us? Send us an email!</div>
                                </div>
                            </Col>
                            <Col xs={12} md={6} >
                                
                            </Col>
                        </Row>
                        </div>
                        <section className='middle-end-container services-container'>
      <div className='career-toptext'>
        </div>
        <div className="card-container">
        <div class="card">
        <div class="card-img card-one"></div>
        <h3 class="card-header">Technology & IT <div><i class="bi bi-bezier2 straticons"></i></div></h3>
        <p>
        I den snabbrörliga världen av teknik och IT är det avgörande att ha rätt kompetens. Stesh säkerställer att ditt team är rustat att driva innovation och hålla jämna steg med branschens framsteg. Vi specialiserar oss på att rekrytera teknik-kunniga professionella, främja deras tillväxt och anpassa din teknikarbetskraft med ditt företags mål.
        </p>
      </div>

      <div class="card">
        <div class="card-img card-two"></div>
        <h3 class="card-header">Engineering and Manufacturing  <div><i class="bi bi-rocket-takeoff straticons"></i></div></h3>
        <p>
        Stesh fokuserar på rekrytering av kunniga ingenjörer, slipar deras tekniska kompetens och ser till att dina tillverknings- och ingenjörsteam är redo för framgång i den konkurrensutsatta miljön.
        </p>
      </div>

      <div class="card">
        <div class="card-img card-three"></div>
        <h3 class="card-header">Business & Marketing <div><i class="bi bi-trophy straticons"></i></div></h3>
        <p>
        Att attrahera och behålla toppkompetens är avgörande för framgång. På Stesh är vi specialiserade på att erbjuda omfattande lösningar för talang som är skräddarsydda för att möta de dynamiska behoven hos företag och marknadsföringsteam. Oavsett om du är en uppstart som vill bygga ett framstående team eller ett etablerat företag som söker nya insikter, är våra tjänster utformade för att ge dig tillgång till den bästa talangen.
        </p>
      </div>
      </div>
    </section>

                        <div className='kareer-bottom-text'>
                        <Row>
                            <Col xs={12} md={6} className=' d-flex align-items-center justify-content-center'>
                                <div className="footer-first">
                                <div id="spontanansokan">
                                <div className='kareermiddle-header'>Spontanansökan</div>
                                <div>Om vi inte har några lediga tjänster som passar eller om du bara vill slänga in en spontanansökan så är du hjärtligt välkommen att registrera ditt CV.</div>
                                </div>
                                </div>
                            </Col>
                            <Col xs={12} md={6} className='footer-column'>
                                <div className="footer-separator">
                                <a href="mailto:info@nexergroup.com" className="contact-email">Skicka din ansökan till <b>stesh@contact.com</b></a>
                                </div>
                            </Col>
                        </Row>
                        </div>
                        <div className='contactemailform'>
                        <Row>
                            <Col xs={12} md={6} className='footer-column d-flex align-items-center justify-content-center'>
                                <div className="footer-first">
                                <div className='contacttouch'>Spontanansökan</div>
                                <div>Om vi inte har några lediga tjänster som passar eller om du bara vill slänga in en spontanansökan så är du hjärtligt välkommen att registrera ditt CV.</div>
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
                        </Row>
                        </div>

                        </div>
      
        </>
    )
}
export default Career