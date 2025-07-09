import React from 'react';
import './Checkbox.css';

const Checkbox = ({ id, label, checked, onChange }) => {
  return (
    <label htmlFor={id} className="checkbox-container">
      <input 
        type="checkbox" 
        id={id}
        checked={checked}
        onChange={onChange}
        className="checkbox-input"
      />
      <span className="checkbox-custom"></span>
      <span className="checkbox-label">{label}</span>
    </label>
  );
};

export default Checkbox;