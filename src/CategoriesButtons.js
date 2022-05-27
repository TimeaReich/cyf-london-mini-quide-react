import React, { useState } from "react";
const CategoriesButtons = () => {
  const [active, setActive] = useState("");
  console.log(active);
  const handleClick = () => {};
  return (
    <div>
      <button
        value="hospitals"
        className={active === "hospitals" ? "active-button" : "inactive-button"}
        onClick={(e) => setActive(e.target.value)}
      >
        Hospitals
      </button>
      <button
        value="doctors"
        className={active === "doctors" ? "active-button" : "inactive-button"}
        onClick={(e) => setActive(e.target.value)}
      >
        Doctors
      </button>
      <button>Schools</button>
      <button>Pharmacies</button>
    </div>
  );
};
export default CategoriesButtons;
