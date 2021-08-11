import { Container, Row, Col } from "react-bootstrap";
import logoImg from "../../assets/logo.svg";
import "./style.css";

export function Header() {
  return (
    <Container fluid>
      <Row className="justify-content-between mt-5 mb-5 ">
        <Col xs="auto">
          <img className="logo" src={logoImg} alt="" />
        </Col>
        <Col xs="auto">
          <button className="try">Try it Free</button>
        </Col>
      </Row>
    </Container>
  );
}
