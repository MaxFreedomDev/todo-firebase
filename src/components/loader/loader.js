import React from "react";

import "./loader.css";

const Loader = () => {
  return (
    <div style={{ display: "flex", margin: "100px 0" }}>
      <div className="lds-ripple">
        <div />
        <div />
      </div>
    </div>
  );
};

export default Loader;
