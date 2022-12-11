import React, { useState } from "react";
import * as MoviesApi from "../utils/MoviesApi";
import * as MainApi from "../utils/MainApi";
import { useLocation } from "react-router-dom";
import { BASE_URL_MOVIES } from "../utils/MoviesApi";

const filter = (searchValue, isShortMovies) => (movie) => {
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
};

export function useMovies() {
  const location = useLocation();
  const isMainApi = location.pathname.includes("saved-movies");
  const [isPreloader, setIsPreloader] = useState(true);
  const [movies, setMovies] = useState({});
  const [moviesList, setMoviesList] = useState([]);
  const [savedMoviesList, setSavedMoviesList] = useState([]);
  const [isShortMovies, setIsShortMovies] = useState(
    () => JSON.parse(localStorage.getItem("isShortMovies")) || false
  );
  const [searchValue] = useState(
    () => localStorage.getItem("searchValue") || ""
  );
  const [filteredMovies, setFilteredMovies] = useState(
    () => JSON.parse(localStorage.getItem("filteredMoviesKey")) || []
  );
  const [filteredSavedMovies, setFilteredSavedMovies] = useState(
    () => JSON.parse(localStorage.getItem("filteredSavedMovies")) || []
  );

  const getAll = () => {
    setIsPreloader(true);

    return Promise.all([MoviesApi.getMoviesList(), MainApi.getSavedMovies()])
      .then(([resMoviesList, resSavedMoviesList]) => {
        const savedMoviesIdList = resSavedMoviesList.map((item) => item.nameRU);
        if (resMoviesList.length) {
          const movies = resMoviesList.reduce((acc, item) => {
            const isSaved = savedMoviesIdList.includes(item.nameRU);
            const savedId = isSaved
              ? resSavedMoviesList.find(
                  (savedMovie) => savedMovie.nameRU === item.nameRU
                )._id
              : null;

            return {
              ...acc,
              [item.id]: {
                ...item,
                isSaved,
                movieId: item.id,
                savedId,
                image: `${BASE_URL_MOVIES}${item.image.url}`,
                thumbnail: `${BASE_URL_MOVIES}${item.image.formats.thumbnail.url}`,
              },
            };
          }, {});

          setMovies(movies);
          const list = Object.keys(movies).map((id) => movies[id]);
          setMoviesList(list);
          const filteredList = list.filter(filter(searchValue, isShortMovies));
          setFilteredMovies(filteredList);
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
            [item._id]: { ...item, isSaved: true, savedId: item._id },
          };
        }, {});
        const list = Object.keys(movies).map((id) => movies[id]);
        setSavedMoviesList(list);
        const filteredList = list.filter(filter(searchValue, isShortMovies));
        setFilteredSavedMovies(filteredList);
        console.log("getSaved movies", movies);
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
    getAll();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  React.useEffect(() => {
    if (isMainApi) {
      getSaved();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isMainApi]);

  function handleToggleShort() {
    const value = !isShortMovies;
    setIsShortMovies(value);
    localStorage.setItem("isShortMovies", value);
  }

  function handleSubmitSearchForm(searchValue) {
    if (isMainApi) {
      setFilteredSavedMovies(
        savedMoviesList.filter(filter(searchValue, isShortMovies))
      );
    } else {
      setFilteredMovies(moviesList.filter(filter(searchValue, isShortMovies)));
    }
  }

  function handleMarkAsSavedMovie(id) {
    const movie = movies[id];

    MainApi.markSavedMovies(movie)
      .then((newMovie) => {
        const newMovies = {
          ...movies,
          [id]: { ...newMovie, id, savedId: newMovie._id, isSaved: true },
        };
        setMovies(newMovies);
        const movList = Object.keys(newMovies).map((id) => newMovies[id]);
        setMoviesList(movList);
        console.log("newMovies", newMovies);

        setFilteredMovies(movList.filter(filter(searchValue, isShortMovies)));
      })
      .catch((err) => {
        console.error(`Ошибка при сохранении: ${err}`);
      });
  }

  function handleDeleteMovies(id) {
    console.log("handleDeleteMovies", movies);
    MainApi.deleteMovie(id)
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        if (isMainApi) {
          getSaved();
          getAll();
        } else {
          getAll();
        }
      });
  }
  return {
    isPreloader,
    isShortMovies,
    filteredMovies: isMainApi ? filteredSavedMovies : filteredMovies,
    isMainApi,
    handleToggleShort,
    handleSubmitSearchForm,
    handleDeleteMovies,
    handleMarkAsSavedMovie,
  };
}
