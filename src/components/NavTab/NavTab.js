import React from 'react';
import './NavTab.css';

function NavTab() {
  return (
     <nav>
      <ul className='nav'>
        <li>
          <a href='#aboutProject' title='О проекте' className='nav__link' >О проекте</a>
        </li>
        <li>
          <a href='#techs' title='Технологии' className='nav__link'>Технологии</a>
        </li>
        <li>
          <a href='#aboutMe' title='Студент' className='nav__link'>Студент</a>
        </li>
      </ul>
    </nav>
  );
}

export default NavTab;
