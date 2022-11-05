import './Navigation.css';
import { NavLink } from 'react-router-dom';
import profile from '../../images/profile/profile.svg'

function Navigation() {
  return (
     <nav>
      <div className='profile__header_container'>
        <div className='profile__wrapper'>
          <NavLink to='/movies' title='Фильмы' className='profile__link_movies' activeClassName='profile__link_movies_active' >
            Фильмы
          </NavLink>
          <NavLink to='/saved-movies' title='Сохраненные фильмы' className='profile__link_saved-movies' activeClassName='profile__link_saved-movies_active'>
            Сохраненные фильмы
          </NavLink>
          <NavLink className='profile__link' to='/profile'>
            <img className= 'profile__image' src={profile} alt='Аккаунт' />
          </NavLink> 
        </div> 
      </div>
    </nav>
  );
}

export default Navigation;
