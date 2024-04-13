import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import AiButton from "../AiButton/AiButton";
import "./AiHeadshotGeneration.scss";
import { Link } from "react-router-dom";

export default function AiHeadshotGeneration() {
  return (
    <div
      className="m-auto"
      style={{ backgroundColor: "rgb(15,15,15)" }}
    >
      <Container >
        <Row className=" inner-wrapper d-flex  mx-auto justify-content-between align-items-center ">
          <Col sm={6} className="left-box ">
            <p className="ms-0 left-heading text-light">
              Generate Professional Headshots with AI
            </p>
            <p className="text-secondary left-text">
              Elevate your social and professional presence with high-quality
              headshots, perfect for any platform. Upload your photo and
              experience the magic now!
            </p>
            <div className="ai-button d-flex">
              <AiButton>
              <Link to='/ai_headshot/create'>Get your headshots</Link>
              </AiButton>
            </div>
          </Col>
          <Col sm={6} className="right-box">
            <div className="img-line">
              <img
                className="image"
                src="https://static.pica-ai.com/_next/static/media/showcase_loop1.040049a5.png"
                alt="showcase"
              />
              <img
                className="image"
                src="https://static.pica-ai.com/_next/static/media/showcase_loop1.040049a5.png"
                alt="showcase"
              />
            </div>
            <div className="img-line">
              <img
                className="image"
                src="https://static.pica-ai.com/_next/static/media/showcase_loop2.bf5fb366.png"
                alt="showcase"
              />
              <img
                className="image"
                src="https://static.pica-ai.com/_next/static/media/showcase_loop2.bf5fb366.png"
                alt="showcase"
              />
            </div>
            <div className="responsive-btn">
              <AiButton>
                <Link to='/ai_headshot/create'>Get your headshots</Link>
              </AiButton>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
