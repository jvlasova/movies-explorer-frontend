import './MoviesCard.css';
import words from '../../images/movies/33words.svg';
import almanah from '../../images/movies/almanah.svg';
import banksy from '../../images/movies/Banksy.svg';
import button_delete from '../../images/movies/delete.svg';

function MoviesCard() {
  return (
    <>
      <article className='movies-card'>
        <img className='image__movies' src={words} alt='33 world' />
        <div className='movies__container'>
          <h2 className='movies__title'>33 слова о дизайне</h2>
          <img className='movies__delete-button' src={button_delete} alt='Удаление' />
        </div>
        <div className='movies__duration'>1ч42м</div>
      </article>
      <article className='movies-card'>
        <img className='image__movies' src={almanah} alt='100 лет' />
        <div className='movies__container'>
          <h2 className='movies__title'>Киноальманах «100 лет дизайна»</h2>
          <img className='movies__delete-button' src={button_delete} alt='Удаление' />
        </div>
        <div className='movies__duration'>1ч42м</div>
      </article>
      <article className='movies-card'>
        <img className='image__movies' src={banksy} alt='33 world' />
        <div className='movies__container'>
          <h2 className='movies__title'>В погоне за Бенкси</h2>
          <img className='movies__delete-button' src={button_delete} alt='Удаление' />
        </div>
        <div className='movies__duration'>1ч42м</div>
      </article>
      <article className='movies-card'>
        <img className='image__movies' src={banksy} alt='Бенкси' />
        <div className='movies__container'>
          <h2 className='movies__title'>В погоне за Бенкси</h2>
          <img className='movies__delete-button' src={button_delete} alt='Удаление' />
        </div>
        <div className='movies__duration'>1ч42м</div>
      </article>
      <article className='movies-card'>
        <img className='image__movies' src={banksy} alt='Бенкси' />
        <div className='movies__container'>
          <h2 className='movies__title'>В погоне за Бенкси</h2>
          <img className='movies__delete-button' src={button_delete} alt='Удаление' />
        </div>
        <div className='movies__duration'>1ч42м</div>
      </article>
    </>
  );
};

export default MoviesCard;
