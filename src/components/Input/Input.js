import React from 'react';

const Input = ({label, value, onChangeHandler, error, ...props}) => {
  return (
    <div className='form-group'>
      <label>{label}:</label>
      <input
        className={error ? 'form-control is-invalid' : 'form-control'}
        value={value}
        onChange={onChangeHandler}
        {...props} />
      <div className="invalid-feedback">This field is required</div>
    </div>
  );
};

export default Input;
