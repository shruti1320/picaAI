import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiButtonWhite } from "../../AiButtonWhite";
import "../DescriptionPages/AiHeadshotDescription.scss";
import { Link } from "react-router-dom";

export default function AiHeadshotDescription2() {
  return (
    <div
      className="hs-generate-wrapper"
      style={{ background: "rgb(22, 31, 55)" }}
    >
      <Container>
        <Row className="hs-inner-wrapper">
          <Col sm={4}>
            <div className="hs-right-box ms-5">
              <img
                class="image"
                src="https://static.pica-ai.com/_next/static/media/showcase2.50cc058d.png"
                alt="showcase1"
              />
            </div>
          </Col>
          <Col sm={8} className="hs-left-box">
            <p className="ms-0 hs-left-heading text-light">
              Craft a Resonating Professional Image with Ease
            </p>
            <p className="text-secondary hs-left-text">
              In a competitive market, a polished image is key. Pica AI headshot
              generator is your ally in crafting a professional brand. Be it for
              LinkedIn profiles, company websites, marketing materials, or
              resume enhancement, our AI technology transforms your photos into
              professional headshots effortlessly. Embrace an affordable and
              swift solution to exude professionalism in every business
              interaction. Get started with Pica AI, and let your brand resonate
              with excellence.
            </p>
            <div className="hs-ai-button">
              <AiButtonWhite>
              <Link to='/ai_headshot/create'>Get your headshots</Link>
              </AiButtonWhite>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
