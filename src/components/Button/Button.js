import React from "react";

function Button({ id, children, action }) {
  return (
    <button id={id} onClick={action}>
      {children}
    </button>
  );
}

export default Button;
