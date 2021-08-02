import React from "react";

// loading message used by Board when fetching API data
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