import React from "react";
import { FaCircleMinus } from "react-icons/fa6";

const InputField = ({ label, name, type, value, onChange, options }) => {
  return (
    <div className="input-box">
      <div className="label">{label}</div>
      {type === "select" ? (
        <select name={name} value={value} onChange={onChange}>
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
        />
      )}
      <div className="minus-circle">
        <FaCircleMinus />
      </div>
    </div>
  );
};

export default InputField;