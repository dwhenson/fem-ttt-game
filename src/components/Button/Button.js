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
  transition: background-color 600ms;
  color: var(--clr-dark-300);
  letter-spacing: 0.05em;
  text-transform: uppercase;
  cursor: pointer;

  &:hover {
    background-color: var(--medium, var(--clr-light-200));
    transition: background-color 250ms;
  }

  &:hover span {
    box-shadow: var(--medium);
    background-color: var(--light, var(--clr-light-100));
    transform: translateY(-4px);
    transition: transform 250ms cubic-bezier(0.3, 0.7, 0.4, 1.5),
      background-color 250ms;
  }

  &:active span {
    background-color: var(--medium, var(--clr-light-200));
    transform: translateY(-2px);
    transition: transform 50ms;
  }
`;

const Front = styled.span`
  display: block;
  padding-block: var(--space-xxs);
  padding-inline: var(--space-s);
  border-radius: 0.5rem;
  box-shadow: var(--low);
  background-color: var(--medium, var(--clr-light-200));
  transform: translateY(-3px);
  will-change: transform;
  transition: transform 600ms cubic-bezier(0.3, 0.7, 0.4, 1),
    background-color 600ms;
  pointer-events: none;
`;

export default React.memo(Button);
