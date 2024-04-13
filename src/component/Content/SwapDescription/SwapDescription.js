import React from "react";
import "./SwapDescription.scss";
import { Container,Row,Col } from "react-bootstrap";
export default function SwapDescription() {
  return (
    <div
      className="wrapper-describe"
      style={{ paddingRight: "40px", paddingLeft: "40px" }}
    >
      <Container>
        <Row className="describe-innertab">
          <Col className="describe-left" sm={8}>
            <h2 className="describe-title">
              Ultra-Fast, Flawless Face Swaps
            </h2>
            <div className="describe-content">
              <p>
            
                ever. Just upload two photos, hit Generate, and watch as the AI
                seamlessly swaps faces in seconds. No manual adjustments needed
                - get polished results in moments. Advanced algorithms ensure
                precise face matches, smooth transitions, and more. Want
                incredible face swaps in an instant?{" "}
              </p>
            </div>
            <div className="button" style={{ marginTop: "20px" }}>
              Swap Face Now
            </div>
          </Col>
          <Col className="describe-right" sm={4}>
            <img
              className=" desrcibe-image"
              style={{
                height: "400px",
                width: "400px",
                marginTop: "-55px",
                maxWidth: "100%",
                display: "block",
                margin: "auto",
                verticalAlign: "middle",
              }}
              src={"/images/describe1.png"}
              alt=" "
            ></img>
            <div className="button" style={{ marginTop: "20px" }}>
              Swap Face Now
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
