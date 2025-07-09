import React from 'react';

const InputField = ({ type, placeholder, icon, required }) => {
  return (
    <div className="input-box">
      <input
        type={type}
        placeholder={placeholder}
        required={required}
      />
      <i className={icon}></i>
    </div>
  );
};

export default InputField;