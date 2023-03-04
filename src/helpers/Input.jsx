import React from "react";
import "./styles.css";

const Input = ({ value, handleSearch, placeholder }) => {
  return (
    <input
      placeholder={placeholder}
      className="input"
      name="text"
      type="text"
      value={value}
      onChange={handleSearch}
    />
  );
};

export default Input;
