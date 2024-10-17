// components/InputField.jsx
import React from "react";
import { FaCircleMinus } from "react-icons/fa6";
import PropTypes from "prop-types";

const InputField = ({
  label,
  name,
  type,
  value,
  onChange,
  options,
  readOnly,
  disabled,
  className,
}) => {
  return (
    <div className={`input-box ${className}`}>
      <div className="label">{label}</div>
      {type === "select" ? (
        <select name={name} value={value} onChange={onChange} disabled={disabled}>
          {options.map((option, idx) => (
            <option key={idx} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      ) : (
        <input
          type={type}
          name={name}
          placeholder={`Enter ${label}`}
          value={value}
          onChange={onChange}
          readOnly={readOnly}
          disabled={disabled}
        />
      )}
      <div className="minus-circle">
        <FaCircleMinus />
      </div>
    </div>
  );
};

// Adding PropTypes for better type checking
InputField.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["text", "number", "select", "date", "time"]).isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  onChange: PropTypes.func.isRequired,
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
