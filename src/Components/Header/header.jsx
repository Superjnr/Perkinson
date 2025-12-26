import React from "react";
import { useRef } from "react";
import "./header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  const closeNavbar = () => {
    navRef.current.classList.remove("responsive_nav");
  };

  return (
    <div className="header">
      <nav className="nav">
        <a href="#" className="logo">
          <h1 className="logo-h">Perkinson</h1>
        </a>
        <ul ref={navRef} className="list">
          <li>
            <a href="#" className="nav-link" onClick={closeNavbar}>
              Home
            </a>
          </li>
          <li>
            <a href="#" className="nav-link" onClick={closeNavbar}>
              About
            </a>
          </li>
          <li>
            <a href="#" className="nav-link" onClick={closeNavbar}>
              Property
            </a>
          </li>
          <li>
            <a href="#" className="nav-link" onClick={closeNavbar}>
              Blog
            </a>
          </li>
          <li>
            <a href="#" className="nav-link" onClick={closeNavbar}>
              Contact
            </a>
          </li>
        </ul>
        <button className="nav-btn nav-open" onClick={showNavbar}>
          <FontAwesomeIcon icon={faBars} />
        </button>
      </nav>
      <div className="hero">
        <div className="hero-text">
          <p>&mdash;&mdash;&mdash;&mdash; We are offering the</p>
          <h1>Prime Real Estate Offer</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim et
            laudantium tempora impedit corporis soluta quam quo praesentium quia
            deleniti magnam cum voluptatum inventore incidunt libero, veritatis
            debitis sunt fugiat? Lorem ipsum dolor sit amet consectetur
            adipisicing elit.
          </p>
          <button className="btn">More Details</button>
        </div>
      </div>
      <div className="hero-search">
        <div className="search-box">
          <h3>Find Your Home</h3>
          <div class="grid grid--4-cols">
            <div className="form">
              <form>
                <select>
                  <option>Location</option>
                  <option>Abuja</option>
                  <option>Lagos</option>
                  <option>Port Harcourt</option>
                  <option>Uyo</option>
                  <option>Ibadan</option>
                </select>
              </form>
            </div>
            <div className="form">
              <form>
                <select>
                  <option>Category</option>
                  <option>Real Estate</option>
                  <option>Interior Decor</option>
                  <option>Consultancy</option>
                </select>
              </form>
            </div>
            <div className="form">
              <form>
                <select>
                  <option>Property Type</option>
                  <option>Duplex</option>
                  <option>Pent House</option>
                  <option>Land</option>
                  <option>Shortlet</option>
                  <option>Rental</option>
                </select>
              </form>
            </div>
            <button className="btn">Search</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
