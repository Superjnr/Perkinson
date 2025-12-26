import React from "react";
import "./addition.css";
import seven from "../../img/seven.jpg";
import eight from "../../img/eight.jpg";

const addition = () => {
  return (
    <div className="section-addition">
      <div className="container">
        <div className="addi-text">
          <h2 className="heading2">Recent Additions</h2>
          <p>
            Stay ahead with newly listed homes in prime locations await. Explore
            the latest properties on the market. <br />
            Find a home that fits your style.
          </p>
        </div>
        <div class="grid grid--2-cols">
          <div className="add-img">
            <img src={seven} alt="city of Lisbon" />
          </div>
          <div className="add-text">
            <h3>Interior Decor</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
              aperiam, qui ad exercitationem, voluptates odio expedita voluptas
              ab voluptate facere vel quisquam dolorum pariatur ullam similique
              fugit et maiores accusantium....{" "}
              <a href="#">
                <b>Read more</b>
              </a>
            </p>
            <b>
              <p className="price">$50,000/Month</p>
            </b>
          </div>
        </div>
        <div class="grid grid--2-cols">
          <div className="add-text">
            <h3>Home Styling</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
              aperiam, qui ad exercitationem, voluptates odio expedita voluptas
              ab voluptate facere vel quisquam dolorum pariatur ullam similique
              fugit et maiores accusantium....{" "}
              <a href="#">
                <b>Read more</b>
              </a>
            </p>
            <b>
              <p className="price">$43,000/Month</p>
            </b>
          </div>
          <div className="add-img">
            <img src={eight} alt="city of Lisbon" />
          </div>
        </div>
        <div className="bt">
          <button className="btn">View More</button>
        </div>
      </div>
    </div>
  );
};

export default addition;
