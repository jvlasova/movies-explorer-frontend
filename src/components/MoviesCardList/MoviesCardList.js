import React from 'react';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import Preloder from '../Preloader/Preloader';
export const BASE_URL_MOVIES = 'https://api.nomoreparties.co';

function MoviesCardList(props) {
  const [number, setNumber] = React.useState(12);
  const [addMovies, setAddMovies] = React.useState(3);
  
  React.useEffect(() => {
    if (window.innerWidth > 1023) {
      setNumber(12);
      setAddMovies(3);
      return
  } else if (window.innerWidth < 767) {
      setNumber(8);
      setAddMovies(2);
      return
  } else if (window.innerWidth < 767) {
      setNumber(5);
      setAddMovies(2);
      return
  }
  }, []);
  //console.log(props.movie);
  if ((props.movies || props.savedMovies).length === 0) {
    return (
      <p className='moviescard__text'>Ни одного фильма не найдено</p>
    )
  } else {
    return (
      <>
        <div className='moviescard__list'>
          {(props.movies || props.savedMovies).slice(0, number).map((movie) => {
            return (
              <MoviesCard
              //key={movie.id}
              key={movie.id || movie.movieId}
                _id={'' || movie.id}
                country={movie.country || ''}
            director={movie.director}
            duration={movie.duration}
            year={movie.year}
            description={movie.description}
            image={ movie.image.url || movie.image}
            trailer={ movie.trailerLink || movie.trailer}
            thumbnail={movie.image.formats.thumbnail.url || movie.thumbnail}
            movieId={ movie.id || movie.movieId}
            nameRU={movie.nameRU}
            nameEN={movie.nameEN}
            onMovieDelete={props.onMovieDelete}
            //onMovieCreate={props.onMovieCreate}
            onMovieDeleteFromMovies={props.onMovieDeleteFromMovies}

            onMovieCreate={props.handleSavedMovie}
                //savedMovies={props.savedMovies}
               moviesButton={!props.moviesButton}
                onLikedMovies={props.onLikedMoive}
                handleSavedMovie={props.handleSavedMovie}
                handleMovieDelete={props.handleMovieDelete}
                isPreloader={props.isPreloader && <Preloder />}
            
              />
            )
          })}
        </div>
        {((props.movies.length > number)) && (
          <div className='movies__more'>
            <button
              type='submit'
              className='movies__button-more'
              onClick={() => setNumber(number+addMovies)}
            >
              Ещё
            </button>
          </div>
        )}
      </>
    );
  }
}

export default MoviesCardList;
