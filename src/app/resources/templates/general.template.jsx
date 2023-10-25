import React from "react";

function General({ children }) {
  return (
    <div>
      <div>
        <div>
          <h4>Teachers Module</h4>
          <small>Easily create new record for teachers</small>
        </div>
      </div>
      {children}
    </div>
  );
}

export default General;
