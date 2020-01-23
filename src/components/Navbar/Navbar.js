import React from 'react';
import { Link } from 'react-router-dom';

import { routing } from '../../constants/routing';

const Navbar = () => {
  return (
    <nav className='navbar navbar-dark bg-dark navbar-expand-lg mb-3'>
      <Link to='/' className='navbar-brand'>Exercise tracker</Link>
      <div className='collapse navbar-collapse'>
        <ul className='navbar-nav mr-auto'>
          <li className='nav-item'>
            <Link to={routing.HOME} className='nav-link'>
              Exercises
            </Link>
          </li>
          <li className='nav-item'>
            <Link to={routing.CREATE_EXERCISE} className='nav-link'>
              Create new Exercise
            </Link>
          </li>
          <li className='nav-item'>
            <Link to={routing.CREATE_USER} className='nav-link'>
              Create new User
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
