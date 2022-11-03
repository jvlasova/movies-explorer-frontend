import './Promo.css';
import { Link } from 'react-router-dom';
import Logo from '../Logo/Logo';
import NavTab from '../NavTab/NavTab';
import landing_logo from '../../images/header/landing_logo.svg';

function Promo() {
  return (
    <section className='promo'>
      <div className='header__container'>
        <Logo />
        <ul className='header__sign'>
          <li className='header__sign'>
            <Link className='header__link' to='/signup'>
              Регистрация
            </Link>
          </li>
          <li className='header__sign'>   
            <Link className='header__link header__button' to='/signin'>
              Войти
            </Link>
          </li>
        </ul>
      </div>
      <div className='promo__container'>
        <img className='landing__logo' src={landing_logo} alt='Центральный логотип' />
        <h1 className='promo__title'>Учебный проект студента факультета Веб&#45;разработки.</h1>
      </div>
      <NavTab />
    </section>
  );
}

export default Promo;
