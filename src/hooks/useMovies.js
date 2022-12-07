import React, { useState } from "react";
import * as MoviesApi from "../utils/MoviesApi";
import * as MainApi from "../utils/MainApi";
import { useLocation } from "react-router-dom";

export function useMovies() {
  const location = useLocation();
  const isMainApi = location.pathname.includes("saved-movies");
  const isShortMoviesKey = isMainApi ? "isShortSavedMovies" : "isShortMovies";
  const searchValueKey = isMainApi ? "searchValueSavedMovies" : "searchValue";
  const filteredMoviesKey = isMainApi
    ? "filteredSavedMovies"
    : "filteredMovies";

  const [isPreloader, setIsPreloader] = useState(true);
  const [movies, setMovies] = useState({});
  const [moviesList, setMoviesList] = useState([]);
  const [isShortMovies, setIsShortMovies] = useState(
    () => localStorage.getItem(isShortMoviesKey) || false
  );
  const [searchValue, setSearchValue] = useState(
    () => localStorage.getItem(searchValueKey) || ""
  );
  const [filteredMovies, setFilteredMovies] = useState(
    () => JSON.parse(localStorage.getItem(filteredMoviesKey)) || []
  );

  const getAll = () => {
    setIsPreloader(true);

    return Promise.all([MoviesApi.getMoviesList(), MainApi.getSavedMovies()])
      .then(([resMoviesList, resSavedMoviesList]) => {
        const savedMoviesIdList = resSavedMoviesList.map(
          (item) => item.movieId
        );
        if (resMoviesList.length) {
          const movies = resMoviesList.reduce((acc, item) => {
            const isSaved = savedMoviesIdList.includes(item.id);
            const savedId = isSaved
              ? resSavedMoviesList.find(
                  (savedMovie) => savedMovie.id === item.movieId
                )._id
              : null;

            return {
              ...acc,
              [item.id]: {
                ...item,
                isSaved,
                movieId: item.id,
                savedId,
              },
            };
          }, {});

          setMovies(movies);
          setMoviesList(Object.keys(movies).map((id) => movies[id]));
        }
      })
      .catch((err) => {
        console.error(
          `Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз. ${err}`
        );
      })
      .finally(() => {
        setIsPreloader(false);
      });
  };

  const getSaved = () => {
    setIsPreloader(true);

    return MainApi.getSavedMovies()
      .then((resSavedMoviesList) => {
        const movies = resSavedMoviesList.reduce((acc, item) => {
          return {
            ...acc,
            [item.id]: { ...item, isSaved: true, savedId: item._id },
          };
        }, {});

        setMovies(movies);
        setMoviesList(Object.keys(movies).map((id) => movies[id]));
      })
      .catch((err) => {
        console.error(
          `Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз. ${err}`
        );
      })
      .finally(() => {
        setIsPreloader(false);
      });
  };

  React.useEffect(() => {
    if (isMainApi) {
      getSaved();
    } else {
      getAll();
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isMainApi]);

  function handleSearchShort() {
    setIsShortMovies(!isShortMovies);
    localStorage.setItem(isShortMoviesKey, !isShortMovies);
  }

  function handleSubmitSearchForm(searchValue) {
    const filteredMovies = moviesList.filter((movie) => {
      const shortFilter =
        isShortMovies &&
        searchValue &&
        movie.nameRU.toLowerCase().includes(searchValue.toLowerCase()) &&
        movie.duration < 40;

      const longFilter =
        !isShortMovies &&
        searchValue &&
        movie.nameRU.toLowerCase().includes(searchValue.toLowerCase());

      return shortFilter || longFilter;
    });

    const stringMovies = JSON.stringify(filteredMovies);
    localStorage.setItem(filteredMoviesKey, stringMovies);

    setFilteredMovies(filteredMovies);
    localStorage.setItem(searchValueKey, searchValue);
    setSearchValue(searchValue);
  }

  function handleMarkAsSavedMovie(id) {
    const movie = movies[id];
    MainApi.markSavedMovies(movie)
      .then(() => {
        if (isMainApi) {
          getSaved();
        } else {
          getAll();
        }
      })
      .catch((err) => {
        console.error(`Ошибка при сохранении: ${err}`);
      });
  }

  function handleDeleteMovies(id) {
    MainApi.deleteMovie(id)
      .then(() => {
        if (isMainApi) {
          getSaved();
        } else {
          getAll();
        }
      })
      .catch((err) => {
        console.error(err);
      });
  }

  return {
    isPreloader,
    moviesList,
    isShortMovies,
    searchValue,
    filteredMovies,
    isShortMoviesKey,
    searchValueKey,
    filteredMoviesKey,
    handleSearchShort,
    handleSubmitSearchForm,
    handleDeleteMovies,
    handleMarkAsSavedMovie,
  };
}
