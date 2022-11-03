import './Portfolio.css';
import arrow from '../../images/portfolio/arrow.svg';

function Portfolio() {
  return (
    <section className='portfolio'>
      <h2 className='portfolio__text'>Портфолио</h2>
      <ul className='portfolio__container'>
        <li className='portfolio__link'>
          <a href='https://jvlasova.github.io/how-to-learn/index.html' className='portfolio__heading' title='How-to-learn'>Статичный сайт</a>
          <img className='portfolio__image' src={arrow} alt='Стрелка' />
        </li>
        <hr className='portfolio__line'></hr>
        <li className='portfolio__link'>
          <a href='https://jvlasova.github.io/russian-travel/index.html' title='Russian Travel' className='portfolio__heading'>Адаптивный сайт</a>
          <img className='portfolio__image' src={arrow} alt='Стрелка' />
        </li>
        <hr className='portfolio__line'></hr>
        <li className='portfolio__link'>
          <a href='https://jvlasova.github.io/mesto/index.html' title='Mesto' className='portfolio__heading'>Одностраничное приложение</a>
          <img className='portfolio__image' src={arrow} alt='Стрелка' />
        </li>
      </ul>
    </section>
  );
}

export default Portfolio;
