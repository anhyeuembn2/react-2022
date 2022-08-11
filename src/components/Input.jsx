import React from "react";

const Input = ({ input, setInput }) => {
  return (
    <>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Them todo"
      />
    </>
  );
};

export default Input;
