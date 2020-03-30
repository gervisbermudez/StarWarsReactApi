import React from "react";

function Spinner(prop) {
  return (
    <div className="d-flex justify-content-center">
      <div className="spinner-border text-primary">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
}

export default Spinner;
