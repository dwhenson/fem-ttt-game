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
  border: 0;
  box-shadow: 0 0.25em var(--shadow, var(--clr-light-300));
  border-radius: 0.5rem;
  background-color: var(--background, var(--clr-light-200));
  text-transform: uppercase;
  letter-spacing: 0.05em;
  cursor: pointer;
`;

export default Button;
