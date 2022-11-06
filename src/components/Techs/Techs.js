import './Techs.css';

function Techs() {
  return (
    <section id='techs' className='techs'>
      <div className='techs__container'>
        <h1 className='techs__title'>Технологии</h1>
        <h2 className='techs__heading'>7 технологий</h2>
        <p className='techs__text'>На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
        <ul className='techs__wrapper'>
          <li>
            <a href='https://webref.ru/html' title='webref.ru/html' className='techs_link techs__button' target='_blank' rel='noopener noreferrer'>
              HTML
            </a>
          </li>
          <li>
            <a href='https://webref.ru/css' title='webref.ru/css' className='techs_link techs__button' target='_blank' rel='noopener noreferrer'>
              CSS
            </a>
          </li>
          <li>
            <a href='https://javascript.ru' title='javascript.ru'className='techs_link techs__button' target='_blank' rel='noopener noreferrer'>
              JS
            </a>
          </li>
          <li>
            <a href='https://ru.reactjs.org' title='reactjs.org' className='techs_link techs__button' target='_blank' rel='noopener noreferrer'>
              React
            </a>
          </li>
          <li>
            <a href='https://github.com' title='github.com' className='techs_link techs__button' target='_blank' rel='noopener noreferrer'>
              Git
            </a>
          </li>
          <li>
            <a href='https://expressjs.com' title='expressjs.com' className='techs_link techs__button' target='_blank' rel='noopener noreferrer'>
              Express.js
            </a>
          </li>
          <li>
            <a href='https://www.mongodb.com' title='www.mongodb.com' className='techs_link techs__button' target='_blank' rel='noopener noreferrer'>
              mongoDB
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Techs;
