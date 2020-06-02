import React from "react";

import "./AuthForm.css";

const AuthForm = ({ handleChange, label, ...otherProps }) => (
  <div className="group">
    <input className="form-input" onChange={handleChange} {...otherProps} />
    {label ? <label>{label}</label> : null}
  </div>
);

export default AuthForm;
