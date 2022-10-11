import React from "react";
import styled from "styled-components";
// Components
import Logo from "../Logo";
import XOutline from "../XOutline";
import OOutline from "../OOutline/Ooutline";
import Button from "../Button";

function SelectGame({ setGameType, marker, setMarker }) {
  return (
    <Wrapper>
      <LogoWrapper>
        <Logo />
      </LogoWrapper>
      <FormWrapper>
        <p>Pick player 1's mark</p>
        <InputWrapper>
          <div>
            <input
              type="radio"
              name="X"
              id="X"
              value="X"
              checked={marker === "X"}
              onChange={(event) => {
                setMarker(event.target.value);
              }}
            />
            <label htmlFor="X">
              <XOutline />
            </label>
          </div>
          <div>
            <input
              type="radio"
              name="O"
              id="O"
              value="O"
              checked={marker === "O"}
              onChange={(event) => {
                setMarker(event.target.value);
              }}
            />
            <label htmlFor="O">
              <OOutline />
            </label>
          </div>
        </InputWrapper>
        <LightText>Remember: X goes first</LightText>
      </FormWrapper>
      <Button id="CPU" action={(event) => setGameType(event.target.id)}>
        New Game (vs CPU)
      </Button>
      <Button id="player" action={(event) => setGameType(event.target.id)}>
        New Game (vs player)
      </Button>
    </Wrapper>
  );
}

// Styled Components
const Wrapper = styled.div`
  > * ~ * {
    margin-block-start: var(--space-m);
  }
`;

const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: var(--space-s);
  background-color: var(--clr-dark-200);
  border-radius: 1rem;

  > * ~ * {
    margin-block-start: var(--space-xs);
  }
`;

const InputWrapper = styled.div`
  display: flex;
  min-width: 100%;
  justify-content: space-between;
  gap: var(--space-xxs);
  border: solid 4px var(--clr-dark-100);
  border-radius: 0.5rem;
  background-color: var(--clr-dark-100);

  > div {
    position: relative;
    width: 100%;

    &:focus-within {
      outline: 2px solid var(--clr-light-100);
      outline-offset: 2px;
    }
  }

  input {
    position: absolute;
    width: 100%;
    height: 1.8rem;
    opacity: 0;
    z-index: 1;
    cursor: pointer;
  }

  input + label {
    cursor: pointer;
    background-color: var(--clr-dark-100);
    height: 2rem;
    display: grid;
    place-items: center;
    padding-inline: var(--space-xxs);
    border-radius: 0.35rem;

    svg {
      height: 1.8rem;
      width: auto;
      stroke: var(--clr-light-100);
      stroke-width: 2;
      fill: var(--clr-light-100);
    }
  }

  input:checked + label {
    background-color: var(--clr-light-200);

    svg {
      stroke: var(--clr-dark-100);
      stroke-width: 2;
      fill: var(--clr-dark-100);
    }
  }
`;

const LightText = styled.p`
  color: var(--clr-light-200);
`;

export default SelectGame;
