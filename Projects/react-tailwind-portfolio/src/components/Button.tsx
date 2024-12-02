import React from 'react';

interface ButtonProps {
  label?: string;
  href?: string;
  target?: string;
  icon?: string;
  classes?: string;
}
const ButtonPrimary = ({ href, target, label, icon, classes }: ButtonProps) => {
  if (href) {
    return (
      <a
        href={href}
        target={target}
        className={'btn btn-primary ' + classes}
      >
        {label}
        {icon && (
          <span
            className='material-symbols-rounded'
            aria-hidden='true'
          >
            {icon}
          </span>
        )}
      </a>
    );
  } else {
    return (
      <button className={'btn btn-primary ' + classes}>
        {label}
        {icon && (
          <span
            className='material-symbols-rounded'
            aria-hidden='true'
          >
            {icon}
          </span>
        )}
      </button>
    );
  }
};

const ButtonOutline = ({ href, target, label, icon, classes }: ButtonProps) => {
    if (href) {
      return (
        <a
          href={href}
          target={target}
          className={'btn btn-outline ' + classes}
        >
          {label}
          {icon && (
            <span
              className='material-symbols-rounded'
              aria-hidden='true'
            >
              {icon}
            </span>
          )}
        </a>
      );
    } else {
      return (
        <button className={'btn btn-outline ' + classes}>
          {label}
          {icon && (
            <span
              className='material-symbols-rounded'
              aria-hidden='true'
            >
              {icon}
            </span>
          )}
        </button>
      );
    }
  };

export { ButtonPrimary, ButtonOutline };
