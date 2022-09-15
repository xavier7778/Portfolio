import { Col, Container, Row } from "react-bootstrap"
import logo from '../assets/img/logo.svg';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
const Footer = () =>{
    return (
        <footer className = "footer">
            <Container>
                <Row className="align-item-center">
                    <Col sm={6}>
                        <img src={logo} alt="logo" />
                    </Col>
                    <Col sm={6} className="tect-center text-sm-end">
                        <div className="social-icon">
                            <a href="https://www.linkedin.com/in/xavier-712b08194/" target="_blank"><img src= {navIcon1} alt="Linkedin"></img></a>
                            <a href="https://www.facebook.com/xavier.sehwag" target="_blank"><img src= {navIcon2} alt="Facebook"></img></a>
                            <a href="https://www.instagram.com/sehwag__xavier/" target="_blank"><img src= {navIcon3} alt="Instagram"></img></a>
                        </div>
                        <p>CopyRight 2022, All Right Reserved</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}
export default Footer;