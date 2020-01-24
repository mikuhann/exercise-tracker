import React from 'react';

const Input = ({label, value, onChangeHandler, ...props}) => {
  return (
    <div className='form-group'>
      <label>{label}:</label>
      <input
        className='form-control'
        value={value}
        onChange={onChangeHandler}
        {...props} />
    </div>
  );
};

export default Input;
