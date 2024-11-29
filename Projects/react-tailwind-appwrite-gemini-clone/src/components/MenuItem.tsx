import React from 'react';

interface MenuItemProps {
  classes?: string;
  labelText: string;
  [key: string]: any;
}
function MenuItem({ classes = '', labelText, ...rest }: MenuItemProps) {
  return (
    <button
      className={`menu-item ${classes}`}
      {...rest}
    >
      <span>{labelText}</span>
      <div className='state-layer'></div>
    </button>
  );
}

export default MenuItem;
