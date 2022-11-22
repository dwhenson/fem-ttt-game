import React from "react";
import styled from "styled-components";
// Components
import Logo from "../Logo/Logo";
import Xsmall from "../Xsmall/Xsmall";
import Osmall from "../Osmall/Osmall";
import Button from "../Button/Button";

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
              <Xsmall />
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
              <Osmall />
            </label>
          </div>
        </InputWrapper>
        <LightText>Remember: X goes first</LightText>
      </FormWrapper>
      <ButtonWrapper>
        <Button
          id="CPU"
          action={(event) => setGameType(event.target.id)}
          dark={"var(--clr-secondary-300)"}
          medium={"var(--clr-secondary-200)"}
          light={"var(--clr-secondary-100)"}>
          New Game (vs CPU)
        </Button>
        <Button
          id="player"
          action={(event) => setGameType(event.target.id)}
          dark={"var(--clr-primary-300)"}
          medium={"var(--clr-primary-200)"}
          light={"var(--clr-primary-100)"}>
          New Game (vs player)
        </Button>
      </ButtonWrapper>
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
  padding-block: var(--space-s);
  padding-inline: var(--space-xs);
  border-radius: 0.5rem;
  box-shadow: 0 0.25em hsla(199, 42%, 14%, 1);
  background-color: var(--clr-dark-200);

  > * ~ * {
    margin-block-start: var(--space-xs);
  }
`;

const InputWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: var(--space-xxs);
  min-inline-size: 100%;
  border: solid 4px var(--clr-dark-100);
  border-radius: 0.5rem;
  background-color: var(--clr-dark-100);

  > div {
    position: relative;
    inline-size: 100%;

    &:focus-within :not(:focus-visible) {
      outline: 4px solid var(--clr-light-100);
      outline-offset: 4px;
    }
  }

  input {
    position: absolute;
    z-index: 1;
    opacity: 0;
    inline-size: 100%;
    block-size: 1.8rem;
    cursor: pointer;
  }

  input + label {
    display: grid;
    place-items: center;
    block-size: 2.2rem;
    padding-inline: var(--space-xxs);
    border-radius: 0.3rem;
    background-color: var(--clr-dark-100);
    transition: all 250ms;
    cursor: pointer;

    svg {
      inline-size: auto;
      block-size: 1.6rem;
      stroke: var(--clr-light-100);
      stroke-width: 2;
      fill: var(--clr-light-100);
      outline: none !important;
    }
  }

  input:checked + label {
    background-color: var(--clr-light-200);
    transition: all 250ms;

    svg {
      stroke: var(--clr-dark-100);
      stroke-width: 2;
      fill: var(--clr-dark-100);
    }
  }
`;

const LightText = styled.p`
  opacity: 0.75;
  color: var(--clr-light-100);
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-s);
`;

export default SelectGame;
