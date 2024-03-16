import React from "react";

import "./About.css";

export default function About() {
  return (
    <div className="about-container">
      <h1 className="about-heading">About</h1>
      <div className="about-main">
        <p className="about-content">
          This is an realtime AI based Yoga Trainer which detects your pose how
          well you are doing. It calculates time of how long you hold the
          pose.It also shows you the best time of you hold the pose.
        </p>
        <p className="guide-info">
          This project is done as the part of course Predictive Analysis under
          the guidance of
          <strong> Dr.Vaishali Wangikar and Mrs. Shubhangi Kale .</strong>
        </p>
      </div>
    </div>
  );
}
