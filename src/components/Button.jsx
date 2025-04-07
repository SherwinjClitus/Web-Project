import React from "react";

const Button = ({ text, type }) => {
  return (
    <button className={`btn ${type === "red" ? "btn-red" : "btn-light"}`}>
      {text}
    </button>
  );
};

export default Button;
