import React from 'react';

const InputField = ({
  label = '',
  name = '',
  type = 'text',
  value = '',
  onChange = () => {},
  options = [],
  placeholder = '',
  ...props
}) => {
  if (type === 'select') {
    return (
      <div className="input-field">
        <label htmlFor={name}>{label}</label>
        <select
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          {...props}
        >
          {options.map((option, index) => (
            <option key={index} value={option.value || option}>
              {option.label || option}
            </option>
          ))}
        </select>
      </div>
    );
  }

  return (
    <div className="input-field">
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        {...props}
      />
    </div>
  );
};

export default InputField;
