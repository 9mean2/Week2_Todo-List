import React from "react";

export default function Input({ onChange, value, refprops }) {
  return (
    <>
      <input ref={refprops} onChange={onChange} value={value} />
    </>
  );
}
