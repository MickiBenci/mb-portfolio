import React from "react";

const Input = React.forwardRef((props, ref) => {
  const { name, type, placeholder, onChange, label } = props;

  const inputClass = type !== "checkbox" ? "uk-input" : "uk-checkbox";

  return (
    <>
      <label htmlFor={name} className="uk-label">
        {label}
      </label>
      <input
        ref={ref}
        type={type}
        name={name}
        onChange={onChange}
        className={inputClass}
        placeholder={placeholder}
      />
    </>
  );
});

export default Input;
