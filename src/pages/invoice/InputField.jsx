// components/InputField.jsx
import React from "react";
import { FaCircleMinus } from "react-icons/fa6";
import PropTypes from "prop-types";

const InputField = ({
  label = '',
  name = '',
  type = 'text',
  value = '',
  onChange = () => {},
  options = [],
  placeholder = '',
  readOnly,
  disabled,
  className,
  ...props
}) => {
  console.log(value)
  if (type === 'select') {
    return (
      <div className={`input-box ${className}`}>
        <div className="label">{label}</div>
        <select name={name} value={value} onChange={onChange} disabled={disabled} {...props}>
          {options.map((option, idx) => (
            <option key={idx} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <div className="minus-circle">
          <FaCircleMinus />
        </div>
      </div>
    );
  }

  return (
    <div className={`input-box ${className}`}>
      <div className="label">{label}</div>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        readOnly={readOnly}
        disabled={disabled}
        {...props}
      />
      <div className="minus-circle">
        <FaCircleMinus />
      </div>
    </div>
  );
};

// Adding PropTypes for better type checking
InputField.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.oneOf(["text", "number", "select", "date", "time"]),
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    })
  ),
  readOnly: PropTypes.bool,
  disabled: PropTypes.bool,
  className: PropTypes.string,
};

InputField.defaultProps = {
  options: [],
  readOnly: false,
  disabled: false,
  className: "",
};

export default InputField;
