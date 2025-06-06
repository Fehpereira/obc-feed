import React from 'react';

const FeedInput = ({ id, type, value, onChange, ...props }) => {
  return (
    <>
      <label htmlFor={id}>Email</label>
      <input
        type={type}
        name={id}
        id={id}
        value={value}
        onChange={onChange}
        {...props}
      />
    </>
  );
};

export default FeedInput;
