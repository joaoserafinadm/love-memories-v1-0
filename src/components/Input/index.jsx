import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@/contexts/ThemeContext';

const Input = ({
  label,
  id,
  name,
  type = 'text',
  placeholder = '',
  value = '',
  onChange,
  variant = 'default',
  size = 'md',
  disabled = false,
  error = '',
  className = '',
  ...props
}) => {
  // Proteção para caso o contexto não esteja disponível
  const themeContext = useTheme();
  const theme = themeContext?.theme || 'light';

  const sizeClasses = {
    sm: 'text-sm px-2 py-1',
    md: 'text-base px-3 py-2',
    lg: 'text-lg px-4 py-3',
  };

  const variantClasses = {
    default: theme === 'dark'
      ? 'bg-gray-900 text-white border-gray-600 placeholder-gray-400'
      : 'bg-white text-gray-900 border-gray-300 placeholder-gray-500',
    success: 'border-green-500 focus:ring-green-500',
    danger: 'border-red-500 focus:ring-red-500',
  };

  const errorClass = error ? 'border-red-500 ring-red-500' : '';
  const disabledClass = disabled ? 'opacity-50 cursor-not-allowed bg-gray-100 dark:bg-gray-800' : '';

  const inputClasses = `
    block w-full rounded-md border focus:outline-none focus:ring-2
    ${sizeClasses[size] || sizeClasses.md}
    ${variantClasses[variant] || variantClasses.default}
    ${errorClass}
    ${disabledClass}
    ${className}
  `;

  // Manipulador de evento com verificação de segurança
  const handleChange = (e) => {
    if (onChange && typeof onChange === 'function') {
      onChange(e);
    }
  };

  return (
    <div className="flex flex-col gap-1">
      {label && (
        <label htmlFor={id || name} className="text-sm font-medium">
          {label}
        </label>
      )}
      <input
        id={id || name}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        disabled={disabled}
        className={inputClasses}
        {...props}
      />
      {error && <span className="text-xs text-red-500">{error}</span>}
    </div>
  );
};

Input.propTypes = {
  label: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func,
  variant: PropTypes.oneOf(['default', 'success', 'danger']),
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  disabled: PropTypes.bool,
  error: PropTypes.string,
  className: PropTypes.string,
};

export default Input;