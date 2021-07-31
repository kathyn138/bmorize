import React from "react";

function Loading() {
  return (
    <div className="col-8 my-auto">
      <div className="spinner-border text-success" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
}

export default Loading;