import React from "react";

function Loading() {
  return (
    <div className="col-8 my-auto">
      <div class="spinner-border text-success" role="status">
        <span class="sr-only">Loading...</span>
      </div>
    </div>
  );
}

export default Loading;