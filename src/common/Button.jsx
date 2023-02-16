import React from "react";
import styled from "styled-components";

const StAddButton = styled.button`
  border: none;
  height: 40px;
  cursor: pointer;
  border-radius: 10px;
  background-color: teal;
  width: 140px;
  color: #fff;
  font-weight: 700;
  margin-bottom: 2%;
`;

function Button({ onClick, text }) {
  return <StAddButton onClick={onClick}>{text}</StAddButton>;
}

export default Button;
