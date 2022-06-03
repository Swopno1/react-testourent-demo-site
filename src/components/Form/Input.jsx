import React from 'react';

const Input = ({ type, id, name, value, placeholder }) => {
  return (
    <input
      type={type}
      id={id}
      name={name}
      value={value}
      placeholder={placeholder}
    />
  );
};

export default Input;
