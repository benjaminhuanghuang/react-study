import React, { HTMLAttributes } from 'react';

interface TextFieldProps extends HTMLAttributes<HTMLInputElement> {
  classes?: string;
  helperText?: string;
  label: string;
  name: string;
  placeholder: string;
  fieldClasses?: string;
  [key: string]: any; // Index signature for additional props
}

const TextField = ({
  classes = '',
  helperText,
  label,
  name,
  placeholder = '',
  fieldClasses = '',
  ...rest
}: TextFieldProps) => {
  return (
    <div className={`text-field-wrapper ${classes || ''}`}>
      <label
        htmlFor={name}
        className='label-text'
      >
        {label}
      </label>
      <input
        id={name}
        placeholder={placeholder}
        className={`text-field ${fieldClasses}`}
        {...rest}
      />
      {helperText && <p className='helper-text'>{helperText}</p>}
    </div>
  );
};

export default TextField;
