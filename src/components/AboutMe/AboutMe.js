import './AboutMe.css';
import Me from '../../images/aboutMe/Me.png';

function AboutMe() {
  return (
    <section id='aboutMe' className='aboutMe'>
      <h1 className='aboutMe__title'>Студент</h1>
        <div className='aboutMe__container'>
          <div className='aboutMe__wrapper'>
            <h2 className='aboutMe__heading'>Евгения</h2>
            <h3 className='aboutMe__subtitle'>Фронтенд-разработчик, 42 года</h3>
            <p className='aboutMe__text'>Я родилась и живу в г. Белгород. Собираюсь перехать, но куда, еще не решила. Работала 20 лет в высшем учебном учебном заведении, но начала испытывать профессиональное выгорания и решила освоить курс по веб-разработке, ушла с постоянной работы и полностью погрузилась в кодинг.</p>
            <p className='aboutMe__link'>Github</p>
          </div>
          <img className='aboutMe__image' src={Me} alt='Я' />
        </div>
    </section>
  );
}

export default AboutMe;
