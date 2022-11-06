import './Portfolio.css';

function Portfolio() {
  return (
    <section className='portfolio'>
      <h2 className='portfolio__text'>Портфолио</h2>
      <ul className='portfolio__container'>
        <li>
          <a href='https://jvlasova.github.io/how-to-learn/index.html' className='portfolio__link' title='How-to-learn' target='_blank' rel='noopener noreferrer'>
            Статичeский сайт
          </a>
          <hr className='portfolio__line'></hr>
        </li>
        <li>
          <a href='https://jvlasova.github.io/russian-travel/index.html' title='Russian Travel' className='portfolio__link' target='_blank' rel='noopener noreferrer'>
            Адаптивный сайт
          </a>
          <hr className='portfolio__line'></hr>
        </li>
        <li>
          <a href='https://jvlasova.github.io/mesto/index.html' title='Mesto' className='portfolio__link' target='_blank' rel='noopener noreferrer'>
            Одностраничное приложение
          </a>
        </li>
      </ul>
    </section>
  );
}

export default Portfolio;
