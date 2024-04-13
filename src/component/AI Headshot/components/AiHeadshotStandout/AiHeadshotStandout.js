import React from "react";
import '../../../../layout/LastSection'
import { Link } from "react-router-dom";

export default function AiHeadshotStandout() {
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
        Ready to Stand Out?
        </h2>
        <div className="section-text" >
        Transform your photos into professional headshots now.
        </div>
        <div className="section-button">
        <Link to='/ai_headshot/create'>Get your headshots</Link>
        </div>
      </div>
    </div>
  );
}
