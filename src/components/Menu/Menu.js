import React from 'react';
import './Menu.css';
import { NavLink } from "react-router-dom";
import Hamburger from '../Hamburger/Hamburger';

function Menu() {
  const [isHamburger, setIsHamburger] = React.useState(false);

  function handleHamburger() {
    setIsHamburger(!isHamburger);
  }
    
  return (
    <>
      <Hamburger
        handleHamburger={handleHamburger}
      />
      <div className={`menu-mobile ${isHamburger ? 'menu-mobile_opened' : ''}`}>
        <div className='menu-mobile__container'>
          <button
            type='button'
            className='menu-mobile__close'
            onClick={handleHamburger}
          />
          <nav className='menu-mobile__navigation'>
            <div className='menu-mobile__list-item'>
              <NavLink
                exact to='/'
                className='menu-mobile__link'
                activeClassName='menuMobile__link_active'
              >Главная</NavLink>
            </div>
            <div className='menu-mobile__list-item'>
              <NavLink
                to='/movies'
                className='menu-mobile__link'
                activeClassName='menuMobile__link_active'
              >Фильмы</NavLink>
            </div>
            <div className='menu-mobile__list-item'>
              <NavLink
                to='/saved-movies'
                className='menu-mobile__link'
                activeClassName='menuMobile__link_active'
              >Сохраннёные фильмы</NavLink>
            </div>
          </nav>
        </div>
        <div className='menu-mobile__container'>
          <NavLink
            to='/profile'
            title='Аккаунт'
            className='menu-mobile__link menu-mobile__link_type_account'
            activeClassName='menuMobile__link_active_account'
          >
            <div className='menu-mobile__image'/>
          </NavLink>
        </div>
      </div>
    </>
  )
}

export default Menu;
