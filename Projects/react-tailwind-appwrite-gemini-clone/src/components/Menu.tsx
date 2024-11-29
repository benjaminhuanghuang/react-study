import React from 'react';

interface MenuProps {
  classes?: string;
  children: React.ReactNode;
}

function Menu({ classes = '', children }: MenuProps) {
  return <div className={`menu ${classes}`}>{children}</div>;
}

export default Menu;
