const FormInput = ({ label, type = "text", value, onChange, placeholder, readOnly = false }) => {
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