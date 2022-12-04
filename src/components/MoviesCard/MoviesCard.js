import React from 'react';
import './MoviesCard.css';
import * as MainApi from '../../utils/MainApi';
import { BASE_URL_MOVIES } from '../../utils/MoviesApi'

function MoviesCard({
  _id,
  country,
  director,
  duration,
  year,
  description,
  image,
  trailerLink,
  thumbnail,
  movieId,
  nameRU,
  nameEN,
  
}){
  const [isLikedMovies, setIsLikedMovies] = React.useState(false);
  const [savedMovies, setSavedMovies] = React.useState([]);

  // function onLikedMovie() {
  //   setIsLikedMoive(!isLikedMoive);
  // }

  function onMovieCreate(data){
      console.log(data);
      setIsLikedMovies(!isLikedMovies);
      MainApi.createMovie(data)
        .then((newMovie) => {
          localStorage.setItem('saved-movies', JSON.stringify(newMovie));
          setSavedMovies([JSON.parse(localStorage.getItem('savedMovies')), ...savedMovies]);
          setSavedMovies([newMovie, ...savedMovies]);
        })
        .catch(err => console.log(err))
    }

    // function isLikedMovies(movie) {
    //   return savedMovies.some((i) => +i.movieId === movie.id)
    // }

  const addDurationMovies = (time) => {
    const hours = Math.floor(time / 60);
    const minutes = time % 60;
    return `${hours}ч ${minutes}м`;
  }

  return (
    <>
      <section className='movies'>
        <a href={trailerLink} className='movies__link' >
          <img src={`${BASE_URL_MOVIES}${image}`} alt={nameRU} className='image__movies' />
        </a>
        <div className='movies__container'>
          <h2 className='movies__title'>{nameRU}</h2>
          <button
          type='button'
          className={`movies__button ${isLikedMovies ? 'movies__button_save' : ''}`}
          aria-label='Сохранить в избранное'
          onClick={onMovieCreate}
          />
        </div>
        <div className='movies__duration'>{`${addDurationMovies(duration)}`}</div>
      </section>
    </>
  )
}

export default MoviesCard;
