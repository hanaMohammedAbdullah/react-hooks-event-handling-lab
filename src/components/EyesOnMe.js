// Code EyesOnMe Component Here
import React from "react";

function EyesOnMe() {
  function onFocused(event) {
    // add event handlers that listen for the focus and blur events.
    console.log("Good!");
  }
  function onBlurred(event) {
    console.log("Hey! Eyes on me!");
  }
  return (
    <>
      <button onBlur={onBlurred} onFocus={onFocused}>
        Eyes on me
      </button>
    </>
  );
}

export default EyesOnMe;
