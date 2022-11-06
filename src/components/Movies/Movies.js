import './Movies.css';
import Header from '../Header/Header';
import SeachForm from '../SeachForm/SeachForm';
//import Preloder from '../Preloader/Preloader';
//import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import words from '../../images/movies/33words.svg';
import almanah from '../../images/movies/almanah.svg';
import banksy from '../../images/movies/Banksy.svg';
import button from '../../images/movies/button.svg';
import save from '../../images/movies/save.svg';

function Movies() {
  return (
    <>
      <Header />
      <SeachForm />
      {/* <div className='preloader'>
        <Preloder />
      </div> */}
      <section className='movies'>
        <div className='moviescard__list'>
          <article className='movies-card'>
            <img className='image__movies' src={words} alt='33 world' />
            <div className='movies__container'>
              <h2 className='movies__title'>33 слова о дизайне</h2>
              <button
                type='button'
                className='movies__button'
              >
                <img className='movies__button' src={save} alt='Кнопка активная' />
              </button>
            </div>
            <div className='movies__duration'>1ч42м</div>
          </article>
          <article className='movies-card'>
            <img className='image__movies' src={almanah} alt='100 лет' />
            <div className='movies__container'>
              <h2 className='movies__title'>Киноальманах «100 лет дизайна»</h2>
              <button
                type='button'
                className='movies__button'
              >
                <img className='movies__button' src={button} alt='Кнопка неактивная' />
              </button>
            </div>
            <div className='movies__duration'>1ч42м</div>
          </article>
          <article className='movies-card'>
            <img className='image__movies' src={banksy} alt='Бенкси' />
            <div className='movies__container'>
              <h2 className='movies__title'>В погоне за Бенкси</h2>
              <button
                type='button'
                className='movies__button'
              >
                <img className='movies__button' src={button} alt='Кнопка неактивная' />
              </button>
            </div>
            <div className='movies__duration'>1ч42м</div>
          </article>
        </div>
      </section>
        {/* <h2 className='form__title'>Нет фильмов</h2> */}
      <div className='movies__more'>
        <button
          type='submit'
          className='movies__button-more'>Ещё
        </button>
      </div>
      <Footer />
    </>
  );
}

export default Movies;
