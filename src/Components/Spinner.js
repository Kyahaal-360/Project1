import React from "react";
import "./Spinner.css";
const Spinner = () => {
  return (
    <div>
      <div className="lds-dual-ring"></div>
      <p>Loading....</p>
    </div>
  );
};

export default Spinner;
