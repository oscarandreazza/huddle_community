import { Container, Row, Col } from "react-bootstrap";

import imgEmail from "../../assets/icon-email.svg";
import imgPhone from "../../assets/icon-phone.svg";
import logoImg from "../../assets/logo2.svg";

import "./style.css";

export function Footer() {
  return (
    <footer>
      <Container fluid>
        <Row className="ms-5 style-ft flex-sm-row-reverse">
          <Col md="6">
            <Col sm="auto" className="mb-4">
              <h2>NEWSLETTER</h2>
            </Col>
            <Col sm="8">
              <p>
                To recieve tips on how to grow your community, sign up to our
                weekly newsletter. We'll never send your spam or pas on your
                email address.
              </p>
            </Col>
            <Col className="mb-5">
              <input
                className="sub-camp"
                type="text"
                placeholder="Digite seu email aqui!"
              />
              <button className="sub-btn">Subscribe</button>
            </Col>
          </Col>
          <Col md="6">
            <Col sm="auto" className="mb-5">
              <img src={logoImg} alt="logoTipo" />
            </Col>
            <Col sm="8">
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Necessitatibus cumque suscipit assumenda illo. Itaque nesciunt
                recusandae eveniet nihil inventore mollitia illum.
              </p>
            </Col>
            <Col className="mb-3">
              <img src={imgPhone} alt="phone" />
              <span>Phone: +1-543-123-4561</span>
            </Col>
            <Col>
              <img src={imgEmail} alt="email" />
              <span>example@huddle.com</span>
            </Col>
          </Col>
          <Row className="mt-5">
            <Col sm="auto">
              <i class="fab fa-facebook-square fa-2x"></i>
            </Col>
            <Col sm="auto">
              <i class="fab fa-instagram fa-2x"></i>
            </Col>
            <Col sm="auto">
              <i class="fab fa-twitter-square fa-2x"></i>
            </Col>
          </Row>
        </Row>
      </Container>
    </footer>
  );
}
