import React from 'react';

const Checkbox = ({ label }) => {
  return (
    <label>
      <input type="checkbox" />
      {label}
    </label>
  );
};

export default Checkbox;