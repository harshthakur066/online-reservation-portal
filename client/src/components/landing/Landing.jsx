import React from "react";
import { Button } from "semantic-ui-react";

import "./Landing.css";

const Landing = () => {
  return (
    <div className="display">
      <div className="view">
        <Button primary className=" btn-large ">
          For Customers
        </Button>
      </div>
      <div className="view">
        <Button primary className="btn-large ">
          For Facility Providers
        </Button>
      </div>
    </div>
  );
};

export default Landing;
