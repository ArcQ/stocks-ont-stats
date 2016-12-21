import React from 'react';
import { IndexLink, Link } from 'react-router';
import './header.scss';

export const Header = () => (
  <div>
    <h1>React Redux Starter Kit</h1>
    <IndexLink to='/' activeClassName='route--active'>
      Home
    </IndexLink>
    {' · '}
    <Link to='/stock-correlation' activeClassName='route--active'>
      Stock Correlation
    </Link>
  </div>
);

export default Header;
