import React from "react";

import './NavbarItem.css';

const NavbarItem = ({pagename, pageicon}) => {
  return (
    <div className="navbaritem">
      <img src={pageicon} alt="dashboard" color="#0073E6"/>
      <span className="navbaritem-text">{pagename}</span>
    </div>
  );
};

export default NavbarItem;
