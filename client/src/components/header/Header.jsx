import React from "react";

import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <nav>
        <div className="nav-wrapper light-blue darken-4">
          <Link to="/">
            <div className="name" style={{ cursor: "pointer" }}>
              Facility Booking
            </div>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Header;
