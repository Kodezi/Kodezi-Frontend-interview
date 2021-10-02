import React from 'react'
import { useFormikContext } from 'formik'

const FloatInput = ({
  name,
  placeholder,
  type,
  value = '',
  checkError = true,
  onChange,
  textLimit = false
}) => {
  const { handleChange, setFieldTouched, errors, touched, values } =
    useFormikContext()

  return (
    <>
      <div className="input-wrapper">
        <input
          value={value || values.name}
          name={name}
          placeholder={placeholder}
          className={
            touched[name] && errors[name] && checkError
              ? 'input-error'
              : 'input-component'
          }
          onBlur={() => setFieldTouched(name)}
          onChange={(name) => {
            handleChange(name)
            onChange && onChange()
          }}
          type={type}
        />
        {textLimit && <p className="character-allow-limit">10/40 characters</p>}
      </div>
      {touched[name] && errors[name] && (
        <span className="error-msg">{errors[name]}</span>
      )}
    </>
  )
}

export default FloatInput
