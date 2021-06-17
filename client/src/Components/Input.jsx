import React from "react";

function Input({ value, setValue, type, className, placeholder }) {
  return (
    <>
      <input
        className={className}
        placeholder={placeholder}
        value={value}
        type={type}
        onChange={(event) => setValue(event.target.value)}
      />
    </>
  );
}

export default Input;
