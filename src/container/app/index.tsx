import React from "react";
import { hot } from "react-hot-loader/root";
import styled from "styled-components";

import { Button } from "../../components/button";
import { Router } from "../router/";

import { Api } from "../../api";

/*const firebasePromise = (async () => {
  const firebase = await import("firebase/app");
  await import("firebase/database");
  await import("firebase/auth");

  return firebase;
})();*/

new Api(null as any);

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
