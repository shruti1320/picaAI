import React from "react";
import "../../../../layout/LastSection";
import "./AiHeadshotTransformation.scss";
import data from "./AiHeadshotTransformation.json"; // Import JSON data
import { Link } from "react-router-dom";

export default function AiHeadshotTransformation() {
  return (
    <div className="wrapper" style={{ background: "rgb(32, 32, 32)" }}>
      <div className="content">
        <h2
          style={{
            textAlign: "center",
            fontWeight: 700,
            fontSize: "48px",
            lineHeight: "60px",
          }}
        >
          Real Transformations, Real Impact
        </h2>
        <div className="section-text text-secondary">
          See how professionals across diverse fields are elevating their brand
          with our AI Headshot Generator. Your enhanced digital persona is just
          a click away! hi
        </div>
        <div className="t-middle">
          <div className="t-animator">
            {data?.map((item, index) => (
              <div key={index} className="t-item item">
                <div className="t-info ">
                  <img
                    className="avatar"
                    src={item.avatarSrc}
                    alt={`showcase${index + 1}`}
                  />
                  <div className="t-text">
                    <span className="t-name">{item.name}</span>
                    <span className="t-job">{item.job}</span>
                  </div>
                </div>
                <div className="t-content ">{item.testimonial}</div>
                <img
                  className="t-showcase"
                  src={item.showcaseSrc}
                  alt={`showcase${index + 1}`}
                />
              </div>
            ))}
          </div>
        </div>
        <div class="t-button"><Link to='/ai_headshot/create'>Get your headshots</Link></div>
      </div>
    </div>
  );
}
