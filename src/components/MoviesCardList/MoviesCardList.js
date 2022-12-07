import React from "react";
import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList({ movies, onMarkSavedMovie, onMovieDelete, isSavedButton }) {
  const [number, setNumber] = React.useState(12);
  const [addMovies, setAddMovies] = React.useState(3);

  React.useEffect(() => {
    if (window.innerWidth > 1023) {
      setNumber(12);
      setAddMovies(3);
      return;
    } else if (window.innerWidth < 767) {
      setNumber(8);
      setAddMovies(2);
      return;
    } else if (window.innerWidth < 767) {
      setNumber(5);
      setAddMovies(2);
      return;
    }
  }, []);
  if (!movies.length) {
    return <p className="moviescard__text">Ни одного фильма не найдено</p>;
  } else {
    return (
      <>
        <div className="moviescard__list">
          {movies.slice(0, number).map((movie) => {
            return (
              <MoviesCard
                id={movie.id}
                key={movie.id}
                savedId={movie.savedId}
                duration={movie.duration}
                image={movie.image?.url || movie.image}
                trailerLink={movie.trailerLink}
                isSavedMovies={movie.isSaved}
                nameRU={movie.nameRU}
                onMovieDelete={onMovieDelete}
                onMarkSavedMovie={onMarkSavedMovie}
              />
            );
          })}
        </div>
        {movies.length > number && (
          <div className="movies__more">
            <button
              type="submit"
              className="movies__button-more"
              onClick={() => setNumber(number + addMovies)}
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
