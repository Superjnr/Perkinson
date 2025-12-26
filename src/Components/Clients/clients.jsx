import React from "react";
import "./clients.css";
import customerA from "../../img/customerA.jpg";
import customerB from "../../img/customerB.jpg";
import customerC from "../../img/customerC.jpg";

const clients = () => {
  return (
    <div className="section-clients">
      <div className="container">
        <h3 className="heading2">Our Clients Speak</h3>
        <p className="copy-long">
          We have been working with clients around the world
        </p>
        <div class="grid grid--3-cols">
          <div className="clients">
            <div className="client-text">
              <h4>Incredible Experience</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
                debitis porro blanditiis sapiente fugiat eveniet?
              </p>
            </div>
            <img src={customerB} alt="client" />
            <h4>Stella Maris</h4>
            <p>UI/UX Designer</p>
          </div>
          <div className="clients">
            <div className="client-text">
              <h4>Professional Partner</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
                debitis porro blanditiis sapiente fugiat eveniet?
              </p>
            </div>
            <img src={customerA} alt="client" />
            <h4>Tayo Daniels</h4>
            <p>Developer</p>
          </div>
          <div className="clients">
            <div className="client-text">
              <h4>Dependable & Responsive</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
                debitis porro blanditiis sapiente fugiat eveniet?
              </p>
            </div>
            <img src={customerC} alt="client" />
            <h4>Austin Smith</h4>
            <p>Developer</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default clients;
