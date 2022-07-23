import React, { useState } from "react";
const MarkInput = ({ mark, setMark }) => {
  return (
    <input
      type="text"
      value={mark}
      onChange={(e) => setMark(e.target.value)}
    ></input>
  );
};

export default MarkInput;
