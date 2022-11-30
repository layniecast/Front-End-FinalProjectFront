import React from "react";

function Note() {
  return (
    <div className="note">
      <h2>Favorite Memory:</h2>
      {/* <p>Details go here:</p> */}
      <form>
        <input
          className="formbox"
          type="text"
          id="name"
          name="name"
          required
          minlength="200"
          maxlength="300"
          size="20"
          placeholder="Your memory note goes here:"
        />
      </form>
    </div>
  );
}

export default Note;
