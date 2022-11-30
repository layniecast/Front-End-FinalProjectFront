import React from "react";

function FormInfo() {
  return (
    <form className="form-1">
      <label htmlFor="search-input">
        <h2>Who are you?</h2>
      </label>

      <label>First Name: </label>
      <input type="text" />
      <br></br>
      <br></br>

      <label>Last Name: </label>
      <input type="text" />
      <br></br>
      <br></br>

      <label> Publish Date: </label>
      <input type="date" />
      <br></br>
      <br></br>
    </form>
  );
}

export default FormInfo;
