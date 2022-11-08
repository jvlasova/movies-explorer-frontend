import './Footer.css';

function Footer() {
  return (
    <footer className='footer'>
      <h2 className='footer__title'>Учебный проект Яндекс.Практикум х BeatFilm </h2>
      <div className='footer__container'>
        <p className='footer__text'>&copy; 2022</p>
        <div footer__wrapper className='footer__wrapper'>
          <a href='https://practicum.yandex.ru' className='footer__link' title='Yandex.Practicum' target='_blank' rel='noopener noreferrer'>
            Яндекс.Практикум
          </a>
          <a href='https://github.com/jvlasova/movies-explorer-frontend' className='footer__link' title='GitHub' target='_blank' rel='noopener noreferrer'>
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
