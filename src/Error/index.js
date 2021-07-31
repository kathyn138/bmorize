import React from "react";

function Error({ error }) {
  return (
    <div className="col-8 my-auto">
      <div class="alert alert-danger" role="alert">
        Oh no! {error}
      </div>
    </div>
  );
}

export default Error;