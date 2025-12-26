import React from "react";
import "./expert.css";
import customerA from "../../img/customerA.jpg";
import customerB from "../../img/customerB.jpg";
import customerC from "../../img/customerC.jpg";

const expert = () => {
  return (
    <div className="section-expert">
      <div className="container">
        <div className="ex-text">
          <h2 className="heading2">Meet the experts</h2>
          <p className="copy-long">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
            fugiat excepturi, reiciendis quaerat necessitatibus dolores. Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Illo possimus
            natus placeat nulla provident voluptatem distinctio dolores
            praesentium itaque veniam.
          </p>
        </div>
        <div className="ex-card">
          <div class="grid grid--4-cols">
            <div className="face-card">
              <img src={customerA} alt="Customer" />
              <h3>Trevor Barnes</h3>
              <p>Co-Founder</p>
            </div>
            <div className="face-card">
              <img src={customerB} alt="Customer" />
              <h3>Mary Openda</h3>
              <p>Co-Founder</p>
            </div>
            <div className="face-card">
              <img src={customerC} alt="Customer" />
              <h3>Bill Elliot</h3>
              <p>Co-Founder</p>
            </div>
            <div className="face-card">
              <img src={customerA} alt="Customer" />
              <h3>Mark Woods</h3>
              <p>Co-Founder</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default expert;
