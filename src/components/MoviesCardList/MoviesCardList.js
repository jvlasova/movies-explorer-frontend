import React from "react";
import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList({
  movies,
  onMarkSavedMovie,
  onMovieDelete,
  isMainApi,
}) {
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
                country={movie.country}
                duration={movie.duration}
                image={movie.image?.url}
                trailerLink={movie.trailerLink}
                thumbnail={movie.thumbnail}
                nameRU={movie.nameRU}
                isSavedMovies={movie.isSaved}
                onMovieDelete={onMovieDelete}
                onMarkSavedMovie={onMarkSavedMovie}
                isMainApi={isMainApi}
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
