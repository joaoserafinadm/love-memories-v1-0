import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@/contexts/ThemeContext';

const Select = ({
  label,
  id,
  name,
  placeholder = '',
  options = [],
  value,
  onChange,
  variant = 'default',
  size = 'md',
  disabled = false,
  error = '',
  className = '',
  ...props
}) => {
  const { theme } = useTheme();

  const sizeClasses = {
    sm: 'text-sm px-2 py-1',
    md: 'text-base px-3 py-2',
    lg: 'text-lg px-4 py-3',
  };

  const variantClasses = {
    default: theme === 'dark'
      ? 'bg-gray-900 text-white border-gray-600'
      : 'bg-white text-gray-900 border-gray-300',
    success: 'border-green-500 focus:ring-green-500',
    danger: 'border-red-500 focus:ring-red-500',
  };

  const errorClass = error ? 'border-red-500 ring-red-500' : '';
  const disabledClass = disabled ? 'opacity-50 cursor-not-allowed bg-gray-100 dark:bg-gray-800' : '';

  const selectClasses = `
    block w-full rounded-md border focus:outline-none focus:ring-2 appearance-none
    ${sizeClasses[size]}
    ${variantClasses[variant] || variantClasses.default}
    ${errorClass}
    ${disabledClass}
    ${className}
  `;

  return (
    <div className="flex flex-col gap-1 relative">
      {label && (
        <label htmlFor={id || name} className="text-sm font-medium">
          {label}
        </label>
      )}
      <div className="relative">
        <select
          id={id || name}
          name={name}
          value={value}
          onChange={onChange}
          disabled={disabled}
          className={selectClasses}
          {...props}
        >
          {placeholder && (
            <option value="" disabled>
              {placeholder}
            </option>
          )}
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-500">
          <svg className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
          </svg>
        </div>
      </div>
      {error && <span className="text-xs text-red-500">{error}</span>}
    </div>
  );
};

Select.propTypes = {
  label: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      label: PropTypes.string.isRequired,
    })
  ),
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func,
  variant: PropTypes.oneOf(['default', 'success', 'danger']),
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  disabled: PropTypes.bool,
  error: PropTypes.string,
  className: PropTypes.string,
};

export default Select;