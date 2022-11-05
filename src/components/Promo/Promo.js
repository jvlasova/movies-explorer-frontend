import './Promo.css';
import { Link } from 'react-router-dom';
import Logo from '../Logo/Logo';
import NavTab from '../NavTab/NavTab';
import landing from '../../images/promo/landing.svg';

function Promo() {
  return (
    <section className='promo'>
      <div className='header__promo'>
        <Logo />
        <div className='header__container'>
          <Link className='header__link' to='/signup'>
            Регистрация
          </Link>
          <Link className='header__link header__link_type_enter' to='/signin'>
            Войти
          </Link>
        </div>
      </div>
      <div className='promo__container'>
        <img className='promo__landing' src={landing} alt='Центральный логотип' />
        <h1 className='promo__title'>Учебный проект студента факультета Веб&#45;разработки.</h1>
      </div>
      <NavTab />
    </section>
  );
}

export default Promo;
