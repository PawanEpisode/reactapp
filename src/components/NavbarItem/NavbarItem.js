import React from "react";

import {ReactComponent as Dashboard} from '../../assets/icons/dashboard.svg';
import {ReactComponent as Assessment} from '../../assets/icons/note_alt.svg';
import {ReactComponent as Library} from '../../assets/icons/quiz.svg';
import {ReactComponent as Status} from '../../assets/icons/admin_meds.svg';

import './NavbarItem.css';

const NavbarItem = ({pagename, isCurrentPath}) => {
  const getPageIcon = () => {
    let content;
    switch(pagename) {
      case 'Dashboard':
        content = <Dashboard />; 
        break;
      case 'Assessment':
        content = <Assessment />; 
        break;
      case 'My Library':
        content = <Library />; 
        break;
      case 'Round Status':
        content = <Status />; 
        break;
      default:
        break;
    }
    return content;
  }
  return (
    <div className={`navbaritem${isCurrentPath ? '-selected': ''}`}>
      <div className="navbaritem-icon">
        {getPageIcon()}
      </div>
      <div className={`navbaritem-text${isCurrentPath ? '-selectedtext': ""}`}>{pagename}</div>
    </div>
  );
};

export default NavbarItem;
