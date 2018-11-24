import React from 'react';

const Navbar = props => {
  const { brand, children } = props;

  return (
    <div className="navbar-wrapper">
      <nav className="navbar">
        <div className="navbar-brand">{brand}</div>
        <div className="navbar-items">{children}</div>
      </nav>
    </div>
  );
};

Navbar.defaultProp = {
  showMenu: true
};

export default Navbar;
