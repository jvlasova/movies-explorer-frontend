import './Portfolio.css';

function Portfolio() {
  return (
    <section className='portfolio'>
      <h2 className='portfolio__text'>Портфолио</h2>
      <div className='portfolio__container'>
        <a href='https://jvlasova.github.io/how-to-learn/index.html' className='portfolio__link' title='How-to-learn'>Статичный сайт</a> 
        <hr className='portfolio__line'></hr>
        <a href='https://jvlasova.github.io/russian-travel/index.html' title='Russian Travel' className='portfolio__link'>Адаптивный сайт</a>
        <hr className='portfolio__line'></hr>
        <a href='https://jvlasova.github.io/mesto/index.html' title='Mesto' className='portfolio__link'>Одностраничное приложение</a>
      </div>
    </section>
  );
}

export default Portfolio;
