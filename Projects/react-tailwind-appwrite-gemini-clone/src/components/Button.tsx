import { span } from 'framer-motion/client';
import { ReactNode } from 'react';

interface ButtonProps {
  classes?: string;
  variant?: string;
  color?: string;
  children: ReactNode;
  [key: string]: any; // Index signature for additional props
}

const Button = ({
  classes = '',
  variant = 'filled',
  color = 'primary',
  children,
  ...rest
}: ButtonProps) => {
  return (
    <button
      className={`btn ${variant} ${color} `}
      {...rest}
    >
      {children}
      <div className='state-layer'></div>
    </button>
  );
};

interface IconButtonProps {
  classes?: string;
  icon?: string;
  size?: string;
  children?: ReactNode;
  [key: string]: any; // Index signature for additional props
}

const IconButton = ({
  classes = '',
  icon = '',
  size = '',
  children,
  ...rest
}: IconButtonProps) => {
  return (
    <button
      className={`icon-btn ${size} ${classes}`}
      {...rest}
    >
      {!children && (
        <span className='material-symbols-rounded icon'>{icon}</span>
      )}
      <div className='state-layer'></div>
      {children}
    </button>
  );
};

export { Button, IconButton };
