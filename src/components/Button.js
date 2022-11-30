import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  --btn-bg: var(--btn-color, rgb(245, 181, 229));
  color: rgb(37, 36, 37);
  font-size: 1rem;
  padding: 0.5rem;
  margin: 0 1rem;
  background: var(--btn-bg);
  border: 2px solid rgb(37, 36, 37);
  border-radius: 7px;
  align-self: center;
  cursor: pointer;
  box-shadow: 0 2px 5px rgb(37, 36, 37);
`;

export default function Button({ func, children }) {
  return <StyledButton onClick={func}>{children}</StyledButton>;
}
