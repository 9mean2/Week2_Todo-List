import React from "react";

export default function Input({ onChange, value }) {
  return (
    <>
      <input onChange={onChange} value={value} />
    </>
  );
}
