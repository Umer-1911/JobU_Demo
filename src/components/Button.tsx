import React from 'react';
type ButtonProps = {
  children: React.ReactNode;
  variant?: 'solid' | 'outline' | 'gradient';
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
  type?: 'button' | 'submit';
  fullWidth?: boolean;
  className?: string;
};
const Button = ({
  children,
  variant = 'solid',
  size = 'md',
  onClick,
  type = 'button',
  fullWidth = false,
  className = ''
}: ButtonProps) => {
  const baseClasses = 'rounded-full font-medium transition-all duration-200 flex items-center justify-center';
  const sizeClasses = {
    sm: 'text-sm px-4 py-1',
    md: 'text-base px-6 py-2',
    lg: 'text-lg px-8 py-3'
  };
  const variantClasses = {
    solid: 'bg-[#7e3aed] hover:bg-[#6e32d1] text-white',
    outline: 'bg-transparent border border-[#7e3aed] text-[#7e3aed] hover:bg-[#7e3aed]/10',
    gradient: 'bg-gradient-to-r from-[#7e3aed] to-[#4b69e9] text-white hover:opacity-90'
  };
  const widthClass = fullWidth ? 'w-full' : '';
  return <button type={type} onClick={onClick} className={`${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${widthClass} ${className}`}>
      {children}
    </button>;
};
export default Button;