import React from "react";
import "./AiHeadshotProcess.scss";
import {Link} from 'react-router-dom';
import { Container } from "react-bootstrap";

export default function AiHeadshotProcess() {
  return (
    <div className="wrapper" style={{ background: "rgb(22, 31, 55)" }}>
      <Container>
        <div className="aiprocess-content">
          <h2
            style={{
              textAlign: "center",
              fontWeight: 700,
              fontSize: "48px",
              lineHeight: "60px",
            }}
          >
            Snap to Pro: Your Quick Path to Professional Headshots
          </h2>

          <p className="aiprocess-text text-secondary">
            Turn casual snaps into professional headshots in a flash with our AI
            generator! Perfect for LinkedIn, Twitter, or business profiles.
            Explore diverse styles, and make a lasting impression without the
            high costs of a photographer. Simply upload and unveil your polished
            digital identity!
          </p>
          <div className="aiprocess-container d-flex">
            <ProcessStep
              image={"/images/select1.png"}
              title="01 Select Styles"
              description="Pick your desired styles; each style generates 8 unique headshots."
            />
            <ProcessArrow />
            <ProcessStep
              image={"/images/upload2.png"}
              title="02 Upload Photos"
              description="Upload at least 6 of your own front-facing photos."
            />
            <ProcessArrow />
            <ProcessStep
              image={"/images/preview1.png"}
              title="03 Preview & Download"
              description="After AI generation, preview your headshots and download the ones you love."
            />
          </div>
          <div className="aiprocess-button mt-5"><Link to='/ai_headshot/create'>Get your headshots</Link></div>
        </div>
      </Container>
    </div>
  );
}

function ProcessStep({ image, title, description }) {
  return (
    <div className="aiprocess-container-item d-flex">
      <img className="aiprocess-image" src={image} alt="" />
      <div className="aiprocess-item-text d-flex">
        <div className="aiprocess-item-title position-relative text-light">
          <span className="aiprocess-ellipse position-absolute"></span>
          {title}
        </div>
        <div
          className="aiprocess-item-description text-light"
          style={{ textAlign: "center" }}
        >
          {description}
        </div>
      </div>
    </div>
  );
}

function ProcessArrow() {
  return <img src={"/images/arrowImg.png"} alt="" className="aiprocess-arrow" />;
}
