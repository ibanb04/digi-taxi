import React from "react";
import "./styles.css";

const Input = ({ value, handleSearch, placeholder, width = "60%" }) => {
  return (
    <input
      style={{ width: width }}
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
