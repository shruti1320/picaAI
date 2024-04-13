import React from "react";
import { Container,Row,Col } from "react-bootstrap";
export default function SwapBenefit() {
  return (
    
    <div className="wrapper-describe" style={{paddingRight:"40px", paddingLeft:"40px"}}>
      <Container>
      <Row className="describe-innertab">
          <Col className="describe-right" sm={4}>
            <img
              className=" desrcibe-image"
              style={{ height: "400px", width: "400px",marginTop: "-15px",
                maxWidth: "100%",
                margin:"auto",
                display: "block",
                verticalAlign: "middle",
              }}
              src={"/images/benefit.png"}
              alt=" "
            ></img>
          </Col>
          <Col className="describe-left" sm={8}>
            <h2 className="describe-title">
            Limitless Creativity with Face Swapping
            </h2>
            <div className="describe-content">
              <p>
              With Pica face swapping tool, you're in control to remix anything imaginable. Access a huge library of popular templates or upload any photo to let your imagination run wild. Become a historical figure, take a selfie with a celebrity, swap your face onto '90s yearbook photos, mashup anything you can think of. Face swapping is not just fun - it lets you explore different realities and bring your wildest ideas to life.
              </p>
            </div>
            <div className="button" style={{ marginTop: "20px" }}>
              Swap Face Now
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
