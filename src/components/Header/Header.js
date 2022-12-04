import React from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom';
import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation.js';
import Menu from '../Menu/Menu';

function Header({ loggedIn }) {

  if (!loggedIn) {
    return (
      <div className='header__promo'>
        <Logo />
        <div className='header__container'>
          <NavLink className='header__link' to='/signup'>
            Регистрация
          </NavLink>
          <NavLink className='header__link header__link_type_enter' to='/signin'>
            Войти
          </NavLink>
        </div>
      </div>
    )
    } else {
      return (
        <>
          <Menu />
          <div className='header__account'>
            <Logo />
            <Navigation />
          </div>
        </>
      )
    }
}

export default Header;
