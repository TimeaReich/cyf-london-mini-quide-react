//import React from "react";

import { useState } from "react";

const Dropdown = () => {
  const [selectedCity, setSelectedCity] = useState("");
  const handleChange = (e) => {
    setSelectedCity(e.target.value);
  };
  return (
    <div>
      <label>Select a city: </label>
      <select onChange={handleChange}>
        <option value="london">London</option>
        <option value="liv">Liverpool</option>
        <option value="man">Manchester</option>
      </select>
    </div>
  );
};
export default Dropdown;
