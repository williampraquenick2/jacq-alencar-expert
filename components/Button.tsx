import React from 'react';
import { MessageCircle } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'whatsapp' | 'outline' | 'white';
  icon?: boolean;
  fullWidth?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'whatsapp', 
  icon = true, 
  fullWidth = false, 
  children, 
  href,
  className = '',
  ...props 
}) => {
  
  const baseStyles = "inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg active:scale-95";
  
  const variants = {
    primary: "bg-brand-600 hover:bg-brand-800 text-white shadow-brand-200",
    whatsapp: "bg-whatsapp hover:bg-whatsappHover text-white shadow-green-100",
    outline: "border-2 border-brand-600 text-brand-600 hover:bg-brand-50",
    white: "bg-white text-brand-600 hover:bg-brand-50 shadow-md hover:shadow-xl"
  };

  const widthClass = fullWidth ? "w-full" : "";

  const content = (
    <>
      {icon && <MessageCircle className="w-5 h-5" />}
      {children}
    </>
  );

  if (href) {
    return (
      <a 
        href={href} 
        target="_blank"
        rel="noopener noreferrer"
        className={`${baseStyles} ${variants[variant]} ${widthClass} ${className}`}
      >
        {content}
      </a>
    );
  }

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${widthClass} ${className}`} 
      {...props}
    >
      {content}
    </button>
  );
};