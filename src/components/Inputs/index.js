import React from 'react';
import './inputsModules.css';

const Inputs = ({ type, label, name, value, onChange, placeholder, required }) => {
  return (
    <div className="inputs-sections">
      <label htmlFor={name} className="titulo-label">{label}:</label>
      <div className="inputs-style">
        <input
          type={type}
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          className="input-style"
        />
      </div>
    </div>
  );
};

export default Inputs;
