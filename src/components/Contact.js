import { Container,Col, Row } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";

export const Contact = () =>{

    return(
        <section className="contact" id="connect">
            <Container>
                <Row className="align-items-center">
                    <Col md={6}>
                        <img src={contactImg} alt="cont-img" />
                    </Col>
                    <Col md={6}>
                        <h2>Get In Touch</h2>
                        <span><b><i>Email : </i></b>xaviersehwag7778@gmail.com</span><br></br>
                        <span><b><i>Phone No. : </i></b>+91-8700303900</span>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Contact;