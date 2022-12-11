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
    isShortMovies,
    filteredMovies,
    isMainApi,
    handleToggleShort,
    handleSubmitSearchForm,
    handleDeleteMovies,
    handleMarkAsSavedMovie,
  } = useMovies();

  return (
    <>
      <Header loggedIn={loggedIn} />
      <SearchForm
        onSearch={handleSubmitSearchForm}
        onToggleSearch={handleToggleShort}
        isShortMovies={isShortMovies}
      />
      {isPreloader ? (
        <Preloder />
      ) : (
        <MoviesCardList
          movies={filteredMovies}
          onMovieDelete={handleDeleteMovies}
          onMarkSavedMovie={handleMarkAsSavedMovie}
          isMainApi={isMainApi}
        />
      )}
      <Footer />
    </>
  );
}

export default Movies;
