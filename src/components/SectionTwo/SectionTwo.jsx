import { Container, Row, Col } from "react-bootstrap";
import { Button } from "../Button/Button";
import imgTogether from "../../assets/illustration-grow-together.svg";
import imgTalk from "../../assets/illustration-flowing-conversation.svg";
import imgUsers from "../../assets/illustration-your-users.svg";

import "./style.css";

export function SectionTwo() {
  return (
    <section className="section-two">
      <Container fluid className="container">
        <Row className="p1 align-items-center text-center text-sm-start  flex-sm-row-reverse">
          <Col sm="6" className="mb-5">
            <img className="img" src={imgTogether} alt="grow-together" />
          </Col>

          <Col sm="6" className="mt-5">
            <h3>Grow Together</h3>
            <p>
              Generate meaningful discussions with your audience and build a
              strong, loyal community. Think of the insighful conversations you
              miss out on with a feeedback form.
            </p>
          </Col>
        </Row>

        <Row className="p1 align-items-center text-center text-sm-start">
          <Col sm="6" className="mb-5">
            <img className="img" src={imgTalk} alt="talk" />
          </Col>
          <Col sm="6" className="mt-5">
            <h3>Flowing Conversations</h3>
            <p>
              You wouldn't paginate a conversation in real life, so why do it
              online? Our threads have just-in-time loading for a more natural
              flow.
            </p>
          </Col>
        </Row>
        <Row className="p1 align-items-center text-center text-sm-start  flex-sm-row-reverse">
          <Col sm="6" className="mb-5">
            <img className="img" src={imgUsers} alt="users" />
          </Col>
          <Col sm="6" className="mt-5">
            <h3>Your Users</h3>
            <p>
              It takes no time at all to integrate Huddle with your app's
              authentication solution. This means, once signed in to your app,
              your users can start chatting immediately.
            </p>
          </Col>
        </Row>

        <Row className="text-center">
          <Col sm="12" className="mb-4">
            <h1>Ready to Build Your Community?</h1>
          </Col>
          <Col sm="12">
            <Button />
          </Col>
        </Row>
      </Container>
    </section>
  );
}
