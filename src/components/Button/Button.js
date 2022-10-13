import React from "react";
import styled from "styled-components";

function Button({ id, children, action, light, medium, dark }) {
  return (
    <StyledButton
      id={id}
      onClick={action}
      style={{ "--light": light, "--medium": medium, "--dark": dark }}>
      <Front>{children}</Front>
    </StyledButton>
  );
}

const StyledButton = styled.button`
  padding: 0;
  border: 0;
  border-radius: 0.5rem;
  background-color: var(--dark, var(--clr-light-300));
  text-transform: uppercase;
  letter-spacing: 0.05em;
  cursor: pointer;

  &:hover span {
    filter: brightness(105%);
    transform: translateY(-4px);
    transition: transform 250ms cubic-bezier(0.3, 0.7, 0.4, 1.5);
    box-shadow: var(--medium);
  }

  &:active span {
    transform: translateY(-2px);
    transition: transform 50ms;
  }
`;

const Front = styled.span`
  display: block;
  padding-inline: var(--space-s);
  padding-block: var(--space-xxs);
  background-color: var(--medium, var(--clr-light-200));
  border-radius: 0.5rem;
  transform: translateY(-3px);
  will-change: transform;
  transition: transform 600ms cubic-bezier(0.3, 0.7, 0.4, 1);
  pointer-events: none;
  box-shadow: var(--low);
`;

export default Button;
