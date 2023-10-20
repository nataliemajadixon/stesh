import { Container, Col, Row } from "react-bootstrap";

const Footer = () => {
    return(
        <>
        <section className="footer">
            <div>
                <div>
                <Container style={{paddingTop: '50px'}}>
      <Row>
       
        <Col><p className='bottomheaders'>CONTACT</p>
    <p><a className='bottomlinks' href='/contact'>hello@stesh.se</a></p>
    <p><a className='bottomlinks' href='/contact'>+46 123 45 67 89</a></p>
    
    </Col>
        <Col >
        <p className='bottomheaders'>ADDRESS</p>
        <p>Sweden....</p>
        <p><a className='bottomlinks' href="https://www.google.com/maps/place/E-Tr%C3%A4dg%C3%A5rd/@58.2519024,13.0068573,17z/data=!3m1!4b1!4m6!3m5!1s0x465acfdbd407861f:0x5d5c1711b909038c!8m2!3d58.2519024!4d13.009046!16s%2Fg%2F1hc3_9fpl">Hitta Hit</a></p>
      
        </Col>
        <Col >
        <p className='bottomheaders'>BLOGS</p>

        </Col>
      </Row>
    </Container>
                </div>
                </div>
        </section>
        </>
    )
}
export default Footer