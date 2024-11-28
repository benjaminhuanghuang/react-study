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
      <div className="state-layer"></div>
    </button>
  );
};


export default Button;