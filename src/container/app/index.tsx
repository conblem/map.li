import React from "react";
import { hot } from "react-hot-loader/root";
import styled from "styled-components";

import { Button } from "../../components/button";
import { Router } from "../router/";

const Title = styled.h1`
  color: green;
`;

export const App = hot(() => (
  <div>
    <Title>Hallo</Title>
    <Button black />
    <Router />
  </div>
));
