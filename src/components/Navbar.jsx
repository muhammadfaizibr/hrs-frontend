import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/NavbarStyles.css";
const routes = [
  { name: "Home", link: "/home" },
  { name: "Hotels", link: "/hotels" },
  { name: "Attractions", link: "/attractions" },
  { name: "Weather", link: "/weather" },
];

const Navbar = () => {
  return (
    <nav>
      <div className="nav-container">
        <div className="group">
          <div className="logo">
            <img
              src="https://static.tacdn.com/img2/brand_refresh/Tripadvisor_lockup_horizontal_secondary_registered.svg"
              alt=""
            />
          </div>
        </div>
        <div className="group">
          <ul>
            {routes.map((e) => {
              return (
                <li>
                  <Link className="parkinsans-sm-highlited-text" to={e.link}>
                    {e.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="group">
          <ul>
            <li>
              <Link className="parkinsans-sm-highlited-text secondary-btn">
                Login
              </Link>
            </li>
            <li>
              <Link className="parkinsans-sm-highlited-text primary-btn">
                Sign Up
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;