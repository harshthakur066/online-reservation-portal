import React from "react";
import { Button } from "semantic-ui-react";

import "./Landing.css";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div className="display">
      <div className="view">
        <Link to="/customer/form">
          <Button primary className=" btn-large ">
            For Customers
          </Button>
        </Link>
      </div>
      <div className="view">
        <Link to="/provider/signin">
          <Button primary className="btn-large ">
            For Facility Providers
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Landing;
