import React from "react";
import { hot } from "react-hot-loader/root";
import styled from "styled-components";

const Title = styled.h1`
  color: green;
`;

export const App = hot(() => (
  <Title>
    <h1>Hallo</h1>
  </Title>
));
