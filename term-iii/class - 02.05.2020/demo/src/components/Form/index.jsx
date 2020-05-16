import React from "react";

import Button from "../Button";

import "./Form.css";
const Form = ({ children, onSubmit }) => (
  <form className="form" onSubmit={onSubmit}>
    {children}
    <Button disabled={!onSubmit}>Submit</Button>
  </form>
);

export default Form;
