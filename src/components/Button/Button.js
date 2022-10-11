import React from "react";
import styled from "styled-components";

function Button({ id, children, action }) {
  return (
    <StyledButton id={id} onClick={action}>
      {children}
    </StyledButton>
  );
}

const StyledButton = styled.button`
  padding-inline: var(--space-m);
  padding-block: var(--space-xxs);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  border-radius: 0.5rem;
  border: 0;
  cursor: pointer;
`;

export default Button;
