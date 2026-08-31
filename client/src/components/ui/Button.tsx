
import React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'danger';
  isLoading?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ variant = 'primary', isLoading, children, className = '', ...props }) => {
  return (
    <button className={`btn btn-${variant} ${className}`} disabled={isLoading} {...props}>
      {isLoading ? <span>Loading...</span> : children}
    </button>
  );
};
