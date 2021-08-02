import React from "react";

// error message used by Board when fetching API data
function Error({ error }) {
  return (
    <div className="col-8 my-auto">
      <div className="alert alert-danger" role="alert">
        Oh no! {error}
      </div>
    </div>
  );
}

export default Error;