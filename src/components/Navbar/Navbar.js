import React from 'react';
import { Link } from 'react-router-dom';

import dashboard from '../../assets/icons/dashboard.svg';
import assessment from '../../assets/icons/note_alt.svg';
import library from '../../assets/icons/quiz.svg';
import status from '../../assets/icons/admin_meds.svg';
import dottedLineNav from '../../assets/icons/dottedLineNav.svg';


import NavbarItem from '../NavbarItem/NavbarItem';

import './Navbar.css';
const Navbar = () => {
  return (
    <div className='navbar'>
        <Link  to='/'>
          <NavbarItem pagename={'Dashboard'} pageicon={dashboard}/>
        </Link>
        <Link  to='/assessment'>
        <NavbarItem pagename={'Assessment'} pageicon={assessment}/>
        </Link>
        <Link  to='/library'>
        <NavbarItem pagename={'My Library'} pageicon={library}/>
        </Link>
        <span><img src={dottedLineNav} alt='dottedline'/></span>
        <Link  to='/roundstatus'>
        <NavbarItem pagename={'Round Status'} pageicon={status}/>
        </Link>
    </div>
  )
}

export default Navbar;