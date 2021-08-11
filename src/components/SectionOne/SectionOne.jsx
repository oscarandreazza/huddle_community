import { Container, Row, Col } from "react-bootstrap";
import "./style.css";
import ScreenMockup from "../../assets/screen-mockups.svg";
import communitiesIcon from "../../assets/icon-communities.svg";
import messagesIcon from "../../assets/icon-messages.svg";

import { Button } from "../Button/Button";

export function SectionOne() {
  return (
    <section className="start">
      <Container fluid>
        <Row className="justify-content-center text-center mt-5">
          <Col sm="12">
            <h1>Build The Community Your Fans Will Love</h1>
          </Col>
        </Row>
        <Row className="justify-content-center text-center mt-4">
          <Col sm="7">
            <p>
              Huddle re-imagines the way we build communities. You have a voice,
              but so does your audience. Create connections with your users as
              you engage in genuine discussion.
            </p>
          </Col>
        </Row>

        <Row className="justify-content-center  text-center mt-4">
          <Col sm="auto">
            <Button />
          </Col>
        </Row>
        <Row className="justify-content-center mt-5">
          <Col sm="11" className="mt-3 mb-5">
            <img className="screen" src={ScreenMockup} alt="screen" />
          </Col>
        </Row>
        <Row className="justify-content-around text-center mt-5">
          <Col className="mb-4" sm="auto">
            <div>
              <img src={communitiesIcon} alt="communities" />
            </div>
            <div>
              <h2 className="info-number">1.4k+</h2>
            </div>
            <div>
              <p className="info">Communities Formed</p>
            </div>
          </Col>

          <Col sm="auto">
            <div>
              <img src={messagesIcon} alt="communities" />
            </div>
            <div>
              <h2 className="info-number">2.7m+</h2>
            </div>
            <div>
              <p className="info">Messages Sent</p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
