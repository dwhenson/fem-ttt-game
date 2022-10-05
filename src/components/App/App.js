import React from "react";
import styled from "styled-components";
import GlobalStyles from "../../GlobalStyles";

function App() {
  return (
    <>
      <Wrapper>Test content</Wrapper>
      <GlobalStyles />
    </>
  );
}

const Wrapper = styled.div`
  font-family: var(--ff-body);
  font-size: var(--step--0);
  font-weight: 400;
  color: var(--clr-dark-100);
`;

export default App;
