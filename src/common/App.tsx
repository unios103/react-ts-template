import React, { FC } from "react";
import styled from "styled-components";
import media from "./styles/_mediaqueries";
import color from "./styles/_color";
import GlobalStyle from "./styles/global";
// import "../scss/global.scss";

const App: FC = () => (
  <>
    <GlobalStyle />
    <Title>蒸発するさかな</Title>
    <h5>Hello</h5>
  </>
);

const Title = styled.h1`
  ${media.md} {
    color: ${color.PRIMARY.main};
  }
`;

export default App;
