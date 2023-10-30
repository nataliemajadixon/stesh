import { Container, Col, Row } from "react-bootstrap";
import '../Home/Home.css';

const Footer = () => {
    return(
        <>
            <section className="footer">
                <div>
                <div>
                <Container>
                    <Row>
                        <Col><p className='bottomheaders'>Kontakt Oss</p>
                        <p><a className='bottomlinks' href='/contact'>Skicka meddelande</a></p>
                        <p><a className='bottomlinks' href='/contact'>E-post</a></p>
                        <p><a className='bottomlinks' href='/contact'>Telefon</a></p>
                        </Col>
                        <Col >
                        <p className='bottomheaders'>Karriär</p>
                        <p><a className='bottomlinks' href='/services'>Tjänster</a></p>
                        <p><a className='bottomlinks' href='/about'>Om Oss</a></p>
                        <p></p>
                        
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