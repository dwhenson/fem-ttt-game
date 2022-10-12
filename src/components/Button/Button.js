import React from "react";
import styled from "styled-components";

function Button({ id, children, action, color, shadow }) {
  return (
    <StyledButton
      id={id}
      onClick={action}
      style={{ "--background": color, "--shadow": shadow }}>
      {children}
    </StyledButton>
  );
}

const StyledButton = styled.button`
  padding-inline: var(--space-s);
  padding-block: var(--space-xxs);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  border-radius: 0.5rem;
  border: 0;
  cursor: pointer;
  background-color: var(--background, var(--clr-light-200));
  /* box-shadow: 0 0.25em hsla(197, 21%, 49%, 1); */
  box-shadow: 0 0.25em var(--shadow, var(--clr-light-300));
`;

export default Button;
