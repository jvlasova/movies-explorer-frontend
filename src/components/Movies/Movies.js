import React from "react";

import "./Movies.css";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import Preloder from "../Preloader/Preloader";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";
import { useMovies } from "../../hooks/useMovies";

function Movies({ loggedIn }) {
  const {
    isPreloader,
    moviesList,
    isShortMovies,
    searchValue,
    filteredMovies,
    handleSearchShort,
    handleSubmitSearchForm,
    handleDeleteMovies,
    handleMarkAsSavedMovie,
    movie,
  } = useMovies();

  return (
    <>
      <Header loggedIn={loggedIn} />
      <SearchForm
        onSearch={handleSubmitSearchForm}
        onToggleSearch={handleSearchShort}
        isShortMovies={isShortMovies}
        searchValue={searchValue}
      />
      {isPreloader ? (
        <Preloder />
      ) : (
        <MoviesCardList
          movies={searchValue ? filteredMovies : moviesList}
          onMovieDelete={handleDeleteMovies}
          onMarkSavedMovie={handleMarkAsSavedMovie}
        />
      )}
      <Footer />
    </>
  );
}

export default Movies;
