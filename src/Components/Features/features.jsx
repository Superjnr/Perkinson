import React from "react";
import "./features.css";
import six from "../../img/six.jpg";

const features = () => {
  return (
    <div className="section-features">
      <div className="container">
        <h2 className="heading2">Core Features</h2>
        <div class="grid grid--2-cols">
          <div className="feat-text">
            <h3>Luxury Fittings</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Laboriosam, dolorem.
            </p>
            <h3>Living Inside a Nature</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Laboriosam, dolorem.
            </p>
            <h3>Royal Touch Paint</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Laboriosam, dolorem.
            </p>
          </div>
          <div className="feat-img">
            <img src={six} alt=" a chair" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default features;
