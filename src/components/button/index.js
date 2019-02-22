import React from "react";
import styled from "styled-components";

const ButtonStyles = styled.button`
  color: ${({ black }) => (black ? "black" : "white")};
  background: ${({ black }) => (black ? "white" : "black")};
`;

export const Button = ({ black }) => (
  <ButtonStyles black={black}>Test</ButtonStyles>
);
