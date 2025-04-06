import React from 'react';
import PropTypes from 'prop-types';

const ButtonGroup = ({ children, className = '', ...props }) => {
  const buttons = React.Children.toArray(children).filter(Boolean);

  return (
    <div
      role="group"
      className={`inline-flex ${className}`}
      {...props}
    >
      {buttons.map((child, index) => {
        const isFirst = index === 0;
        const isLast = index === buttons.length - 1;
        const shapeClass = isFirst
          ? 'rounded-start'
          : isLast
          ? 'rounded-end'
          : 'rounded-none border-l-0';

        return React.cloneElement(child, {
          className: `${child.props.className || ''} ${shapeClass} -ml-px first:ml-0`.trim(),
        });
      })}
    </div>
  );
};

ButtonGroup.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default ButtonGroup;
