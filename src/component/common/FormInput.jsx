const FormInput = ({ label, type = "text", value, onChange, placeholder, readOnly = false,name }) => {
  if (type === "select") {
    return (
      <div className="input-field">
        <label htmlFor={name}>{label}</label>
        <select id={name} name={name} value={value} onChange={onChange} {...props}>
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
      <div className="input-box">
        <label className="label">{label}</label>
        <input
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="form-input"
          readOnly={readOnly}
        />
      </div>
    );
  };

  export default FormInput