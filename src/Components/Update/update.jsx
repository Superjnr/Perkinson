import React from "react";
import "./update.css";

const update = () => {
  return (
    <div className="section-update">
      <div className="container">
        <div className="update">
          <h2>Stay Updated</h2>
          <p>
            Subscribe with Email and loads of interesting news will be sent to
            you on a daily basis
          </p>
          <input type="email" placeholder="Your email here" />
          <button className="btn">Follow Us</button>
        </div>
      </div>
    </div>
  );
};

export default update;
