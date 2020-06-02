import React from "react";
import { Button } from "semantic-ui-react";
import { Link } from "react-router-dom";

import "./FormThank.css";

const FormThankyou = () => {
  return (
    <div className="main">
      <div className="sub">
        <h3>Thanks for your time to fill up the form.</h3>
      </div>
      <div className="sub">
        <h3>Our facility providers will contact you soon.</h3>
      </div>
      <div className="view">
        <Link to="/">
          <Button positive>Go To Home</Button>
        </Link>
      </div>
    </div>
  );
};

export default FormThankyou;
