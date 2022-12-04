import './Promo.css';
import NavTab from '../NavTab/NavTab';
import landing from '../../images/promo/landing.svg';

function Promo() {
  
  return (
    <section className='promo'>
      <div className='promo__container'>
        <img className='promo__landing' src={landing} alt='Центральный логотип' />
        <h1 className='promo__title'>Учебный проект студента факультета Веб&#45;разработки.</h1>
      </div>
      <NavTab />
    </section>
  )
}

export default Promo;
