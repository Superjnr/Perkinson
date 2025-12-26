import React from "react";
import "./footer.css";
import nine from "../../img/nine.jpg";
import ten from "../../img/ten.jpg";

const footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div class="grid grid--3-cols">
          <div className="">
            <h1 className="foot-h">Perkinson</h1>
            <p className="fp">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Necessitatibus, neque.
            </p>
          </div>
          <div className="">
            <h4>Recent Properties</h4>
            <div class=" foot-pro grid grid--2-cols">
              <div className="">
                <img src={nine} alt="" />
              </div>
              <div>
                <p>234, Richarlison Avenue, Spurs Road, London</p>
                <p className="p">$30,000</p>
              </div>
              <div className="">
                <img src={ten} alt="" />
              </div>
              <div>
                <p>234, Richarlison Avenue, Spurs Road, London</p>
                <p className="p">$40,000</p>
              </div>
            </div>
          </div>
          <div className="">
            <h4>Contact Info</h4>
            <div className="d">
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Necessitatibus, neque.
              </p>
              <p>Phone: (239)444-444-444</p>
              <p>Email: abcd@domain.com</p>
              <p>Website: www.thissite.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default footer;
