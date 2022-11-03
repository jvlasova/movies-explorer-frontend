import './Navigation.css';
import { Link } from 'react-router-dom';
import profile from '../../images/profile/profile.svg'

function Navigation() {
  return (
     <nav>
      <ul className='profile__wrapper'>
          <li className='profile__wrapper'>
            <Link className='profile__link_movies' to='/movies'>
              Фильмы
            </Link>
            <Link className='profile__link_saved-movies' to='/saved-movies'>
              Сохраненные фильмы
            </Link>
          </li>
          <li className='profile__wrapper'>   
            <Link className='profile__link' to='/profile'>
              <img className= 'profile__image' src={profile} alt='Аккаунт' />
            </Link>
          </li>
      </ul>
    </nav>
  );
}

export default Navigation;
