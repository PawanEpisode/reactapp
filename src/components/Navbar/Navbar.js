import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import dottedLineNav from '../../assets/icons/dottedLineNav.svg';

import NavbarItem from '../NavbarItem/NavbarItem';

import './Navbar.css';
const Navbar = () => {
  const pathname = window.location.pathname;
  const [currentPage, setCurrentPage] = useState(pathname === '/' ? '': pathname);
  
  return (
    <div className='navbar'>
        <Link  to='/' onClick={()=> setCurrentPage('')}>
          <NavbarItem pagename={'Dashboard'} isCurrentPath={currentPage === ''}/>
        </Link>
        <Link  to='/assessment' onClick={()=> setCurrentPage('/assessment')}>
        <NavbarItem pagename={'Assessment'} isCurrentPath={currentPage === '/assessment'}/>
        </Link>
        <Link  to='/library' onClick={()=> setCurrentPage('/library')}>
        <NavbarItem pagename={'My Library'} isCurrentPath={currentPage === '/library'}/>
        </Link>
        <span><img src={dottedLineNav} alt='dottedline'/></span>
        <Link  to='/roundstatus' onClick={()=> setCurrentPage('/roundstatus')}>
        <NavbarItem pagename={'Round Status'} isCurrentPath={currentPage === '/roundstatus'}/>
        </Link>
    </div>
  )
}

export default Navbar;