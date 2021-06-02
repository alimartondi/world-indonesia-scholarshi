import React from "react";
import { Col, Row, Container, Card } from "react-bootstrap";
import Case from "../images/case.svg";
import Mobile from "../images/mobile.svg";
import Work from "../images/work.svg";

export default function Advantages() {
  return (
    <section className="advantages" id="advant">
      <Container>
        <Row className="justify-content-center">
          <Col lg={7} className="text-center">
            <p className="secondHero-text mt-5">Start Now</p>
            <h1 className="secondHero-title">Why should you choose us?</h1>
            <p className="mt-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
              corporis dolores labore? Unde, quaerat deleniti.
            </p>
          </Col>
        </Row>
        <Row>
          <Col lg={12}>
            <div className="advant-items">
              <div className="advant-items__grid">
                {advantContents.map((content, i) => (
                  <Card className="advant-items__card border-0" key={i}>
                    <div className="advant-items-img">
                      <img src={content.image} alt="" />
                    </div>
                    <div className="advant-items__content">
                      <h6 className="mainSecond-text mt-4">{content.title}</h6>
                      <p className="description mt-4">{content.body}</p>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

const advantContents = [
  {
    image: Case,
    title: "Learn With a Case Studies",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excorporis dolores labore? Unde, quaerat deleniti.",
  },
  {
    image: Mobile,
    title: "Free Mobile Application",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excorporis dolores labore? Unde, quaerat deleniti.",
  },
  {
    image: Work,
    title: "Flexuble Learning Time",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excorporis dolores labore? Unde, quaerat deleniti.",
  },
];
