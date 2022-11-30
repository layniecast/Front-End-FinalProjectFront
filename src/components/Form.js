import React from "react";

function Form() {
  return (
    <form className="form">
      <label htmlFor="search-input">
        <h2>Your image goes here!</h2>
      </label>
      <p>
        Please upload an image below:
        <br></br>
        <br></br>
        <input
          type="file"
          id="search-input"
          accept="image/png, image/jpeg image/pdf"
        />
      </p>
      <p>*Images accepted are png, jpeg, pdf*</p>
    </form>
  );
}

export default Form;
