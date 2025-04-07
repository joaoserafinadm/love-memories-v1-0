import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@/contexts/ThemeContext';

const Card = ({
  children,
  variant = 'default',
  size = 'md',
  shadow = true,
  border = true,
  rounded = true,
  className = '',
  ...props
}) => {
  const { theme } = useTheme();

  const baseClasses = 'p-4 transition-all duration-300 mx-1';

  const sizeClasses = {
    sm: 'p-3 text-sm',
    md: 'p-4 text-base',
    lg: 'p-6 text-lg',
  };

  const variantClasses = {
    default:
      theme === 'dark'
        ? 'bg-gray-800 text-white'
        : 'bg-white text-gray-900',
    primary:
      theme === 'dark'
        ? 'bg-rose-500 text-white'
        : 'bg-rose-100 text-rose-900',
    secondary:
      theme === 'dark'
        ? 'bg-slate-600 text-white'
        : 'bg-slate-100 text-slate-800',
    success:
      theme === 'dark'
        ? 'bg-green-600 text-white'
        : 'bg-green-100 text-green-800',
    warning:
      theme === 'dark'
        ? 'bg-yellow-600 text-white'
        : 'bg-yellow-100 text-yellow-800',
    danger:
      theme === 'dark'
        ? 'bg-red-600 text-white'
        : 'bg-red-100 text-red-800',
  };

  const shadowClass = shadow ? 'shadow-md' : '';
  const borderClass = border ? 'border border-gray-200 dark:border-gray-700' : '';
  const roundedClass = rounded ? 'rounded-xl' : '';

  const cardClasses = `
    ${baseClasses}
    ${sizeClasses[size] || sizeClasses.md}
    ${variantClasses[variant] || variantClasses.default}
    ${shadowClass}
    ${borderClass}
    ${roundedClass}
    ${className}
  `;

  return (
    <div className={cardClasses} {...props}>
      {children}
    </div>
  );
};

Card.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf([
    'default',
    'primary',
    'secondary',
    'success',
    'warning',
    'danger',
  ]),
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  shadow: PropTypes.bool,
  border: PropTypes.bool,
  rounded: PropTypes.bool,
  className: PropTypes.string,
};

export default Card;
