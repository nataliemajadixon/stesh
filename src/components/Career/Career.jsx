import '../Home/Home.css'
import { Col, Row } from "react-bootstrap";

const Career = () => {
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
                                <div className="footer-first">
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
                        </div>
      
        </>
    )
}
export default Career