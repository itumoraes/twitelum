import React from 'react'

const InputFormField = ({ id, label, errors, values, onChange }) => {
  return (
    <div className="loginPage__inputWrap">
      <label className="loginPage__label" htmlFor={id}>
        {label}
      </label> 
      <input
        className="loginPage__input"
        type="text"
        id={id}
        name={id}
        value={values[id]}
        onChange={onChange}
      />
      <p style={{ color: 'red' }}>
        {errors[id] && errors[id]}
      </p>
    </div>
  )
}

export default InputFormField
