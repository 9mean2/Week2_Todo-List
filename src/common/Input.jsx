import React from "react";
import styled from "styled-components";

const StFormLabel = styled.label`
  font-size: 16px;
  font-weight: 700;
`;

const StAddInput = styled.input`
  border: none;
  border-radius: 12px;
  padding: 0 12px;
  height: 40px;
  width: 180px;
  box-shadow: 2px 2px 2px;
`;

const StAddBack = styled.div`
  float: left;
  height: 40px;
  width: 240px;
`;

export default function Input({ onChange, value, refprops }) {
  return (
    <div>
      <StAddBack>
        <StFormLabel>✏️</StFormLabel>
        <StAddInput ref={refprops} onChange={onChange} value={value} />
      </StAddBack>
    </div>
  );
}
