import React from "react";
import { Container } from "react-bootstrap";
import "../../../../layout/LastSection";
import "../../../Pricing/Pricing.scss";
import "../AiHeadshotTransformation/AiHeadshotTransformation.scss"
import './AiHeadshotPackages.scss';
import { Link } from "react-router-dom";

export default function AiHeadshotPackages() {
  return (
    <div className="wrapper">
      <div className="content">
      <h2
          style={{
            textAlign: "center",
            fontWeight: 700,
            fontSize: "48px",
            lineHeight: "60px",
          }}
        >
        Affordable Packages, Professional Headshots
        </h2>
        
        <p className="section-text text-secondary">
          Pick a plan that suits your budget, and step into professionalism.
        </p>
        <Container  className=" pt-4 d-flex align-items-center justify-content-center gap-4 mb-4 pisha">
          <div
            className="card px-3 pb-4 text-center mb-5 me-3"
            style={{
              border: " none",
              borderRadius: "18px",
              width: "20rem",
              backgroundColor: "rgb(22, 31, 55)",
            }}
          >
            <div className="card-body">
              <h4 className=" bold text-light card-title mt-5 mb-1">Mini</h4>
              <p className="card-text text-light" style={{ fontSize: "64px" }}>
                $3.99
              </p>
              <h5 className="card-text text-secondary mb-5">
                👕 Pick 1-1 styles, and get 8 headshots for each style.
              </h5>
            </div>
          </div>


          <div
            className="card px-3 text-center mb-5 me-3 position-relative overflow-auto "
            style={{
              border: " none",
              borderRadius: "15px",
              width: "20rem",
              backgroundColor: "rgb(22, 31, 55)",
            }}
          >
            <div className="card-body">
              <h4 className=" bold text-light card-title mt-5  mb-1">
                Standard
              </h4>
              <p className="card-text text-light" style={{ fontSize: "64px" }}>
                $5.99
              </p>
              <h5 className="card-text text-secondary mb-5">
                📷 3k+ format. 👕 Pick 1-2 styles, and get 8 headshots for each
                style.
              </h5>
            </div>
            <div className="px-3 text-light position-absolute top-0 end-0 p-2" style={{borderBottomLeftRadius: "20px",border:"none", background:"linear-gradient(138deg, rgb(124,100,250) 0%, rgb(236,75,232) 50%,rgb(222, 77, 234) 94.85%)"}}>Most Popular</div>
          </div>


          <div
            className="card px-3 text-center mb-5 position-relative overflow-auto"
            style={{
              border: " none",
              borderRadius: "15px",
              width: "20rem",
              backgroundColor: "rgb(22, 31, 55)",
            }}
          >
            <div className="card-body">
              <h4 className=" bold text-light card-title mt-5 mb-1">Plus</h4>
              <p className="card-text text-light" style={{ fontSize: "64px" }}>
                $9.99
              </p>
              <h5 className="card-text text-secondary mb-5">
                📷 3k+ format. 👕 Pick 1-8 styles, and get 8 headshots for each
                style.
              </h5>
            </div>
            <div className=" px-4 text-light position-absolute top-0 end-0 p-2" style={{borderBottomLeftRadius: "20px", border:"none", background:"linear-gradient(138deg, rgb(124,100,250) 0%, rgb(236,75,232) 50%,rgb(222, 77, 234) 94.85%)"}}>Best Value</div>

          </div>
        </Container>
        <div class="t-button"><Link to='/ai_headshot/create'>Get your headshots</Link></div>
      </div>
    </div>
  );
}
