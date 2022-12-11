import React from "react";
import "./MoviesCard.css";

function MoviesCard({
  id,
  savedId,
  duration,
  image,
  trailerLink,
  nameRU,
  thumbnail,
  onMovieDelete,
  onMarkSavedMovie,
  isSavedMovies,
  isMainApi,
}) {
  const handleMovieCreate = () => {
    onMarkSavedMovie(id);
  };

  const handleMovieDelete = () => {
    onMovieDelete(savedId);
  };

  const addDurationMovies = (time) => {
    const hours = Math.floor(time / 60);
    const minutes = time % 60;
    return `${hours}ч ${minutes}м`;
  };

  return (
    <>
      <section className="movies">
        <a href={trailerLink} className="movies__link">
          <img
            src={image || thumbnail}
            alt={nameRU}
            className="image__movies"
          />
        </a>
        <div className="movies__container">
          <h2 className="movies__title">{nameRU}</h2>
          {isMainApi && (
            <button
              type="button"
              className={`movies__button ${
                isSavedMovies ? "movies__button_delete" : ""
              }`}
              aria-label="Удалить из избранного"
              onClick={isSavedMovies ? handleMovieDelete : undefined}
            />
          )}
          {!isMainApi && (
            <button
              type="button"
              className={`movies__button ${
                isSavedMovies ? "movies__button_save" : ""
              }`}
              aria-label="Сохранить в избранное"
              onClick={isSavedMovies ? handleMovieDelete : handleMovieCreate}
            />
          )}
        </div>
        <div className="movies__duration">{`${addDurationMovies(
          duration
        )}`}</div>
      </section>
    </>
  );
}

export default MoviesCard;
