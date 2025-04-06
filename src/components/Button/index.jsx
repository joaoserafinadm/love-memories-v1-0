// components/Button.jsx
import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@/contexts/ThemeContext';
const Button = ({
  children,
  type = 'button',
  variant = 'default',
  size = 'md',
  pill = false,
  outline = false,
  fullWidth = false,
  disabled = false,
  onClick,
  className = '',
  ...props
}) => {

  const { theme } = useTheme();


  // Base classes para todos os botões
  const baseClasses = "font-sans font-medium leading-none inline-flex items-center justify-center";

  // Classes de tamanho
  const sizeClasses = {
    xs: "text-xs px-2 py-1",
    sm: "text-sm px-3 py-2",
    md: "text-base px-4 py-2",
    lg: "text-lg px-5 py-3",
    xl: "text-xl px-6 py-4"
  };

  // Classes para variantes usando cores temáticas
  const variantClasses = {
    default: !outline
      ? theme === 'dark'
        ? "text-sm font-medium text-white bg-gray-800 border border-gray-600 hover:bg-gray-700 hover:text-rose-200 focus:z-10 focus:ring-4 focus:ring-gray-700"
        : "text-sm font-medium text-gray-900 bg-white border border-gray-200 hover:bg-gray-100 hover:text-rose-500 focus:z-10 focus:ring-4 focus:ring-gray-100"
      : theme === 'dark'
        ? "border border-gray-400 text-gray-300 hover:bg-gray-800 hover:text-rose-300"
        : "border border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-rose-300",
    primary: !outline
      ? "bg-rose-500 hover:bg-rose-600 text-white dark:bg-rose-500 dark:hover:bg-rose-400"
      : "border border-rose-500 text-rose-500 hover:bg-rose-500 hover:text-white dark:border-rose-400 dark:text-rose-400",
    secondary: !outline
      ? "bg-slate-500 hover:bg-slate-600 text-white dark:bg-slate-500 dark:hover:bg-slate-400"
      : "border border-slate-500 text-slate-500 hover:bg-slate-500 hover:text-white dark:border-slate-400 dark:text-slate-400",
    success: !outline
      ? "bg-green-500 hover:bg-green-600 text-white dark:bg-green-600 dark:hover:bg-green-500"
      : "border border-green-500 text-green-500 hover:bg-green-500 hover:text-white dark:border-green-400 dark:text-green-400",
    info: !outline
      ? "bg-teal-500 hover:bg-teal-600 text-white dark:bg-teal-600 dark:hover:bg-teal-500"
      : "border border-teal-500 text-teal-500 hover:bg-teal-500 hover:text-white dark:border-teal-400 dark:text-teal-400",
    warning: !outline
      ? "bg-yellow-500 hover:bg-yellow-600 text-white dark:bg-yellow-600 dark:hover:bg-yellow-500"
      : "border border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-white dark:border-yellow-400 dark:text-yellow-400",
    danger: !outline
      ? "bg-red-500 hover:bg-red-600 text-white dark:bg-red-600 dark:hover:bg-red-500"
      : "border border-red-500 text-red-500 hover:bg-red-500 hover:text-white dark:border-red-400 dark:text-red-400",
    muted: !outline
      ? "bg-slate-300 hover:bg-slate-600 text-white dark:bg-slate-300 dark:hover:bg-slate-200"
      : "border border-slate-300 text-slate-300 hover:bg-slate-300 hover:text-white dark:border-slate-200 dark:text-slate-200",
  };

  // Classes adicionais
  const shapeClass = pill ? "rounded-pill" : "rounded";
  const widthClass = fullWidth ? "w-full" : "";
  const disabledClass = disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer transition-colors duration-150";

  // Combinando todas as classes
  const buttonClasses = `
    ${baseClasses}
    ${sizeClasses[size] || sizeClasses.md}
    ${variantClasses[variant] || variantClasses.default}
    ${shapeClass}
    ${widthClass}
    ${disabledClass}
    ${className}
  `;

  return (
    <button
      type={type}
      className={buttonClasses}
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  variant: PropTypes.oneOf(['default', 'primary', 'success', 'info', 'warning', 'danger']),
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
  pill: PropTypes.bool,
  outline: PropTypes.bool,
  fullWidth: PropTypes.bool,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  className: PropTypes.string
};

export default Button;