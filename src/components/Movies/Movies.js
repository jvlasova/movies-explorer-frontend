import React from 'react';
import './Movies.css';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
//import Preloder from '../Preloader/Preloader';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';

function Movies(props) {
  
  return (
    <>
      <Header 
        loggedIn={props.loggedIn}
      />
      <SearchForm 
        handleSubmitSeachForm={props.handleSubmitSeachForm}
      
      />
     {/* <Preloder /> */}
      <MoviesCardList 
                movies={props.movies}
                //savedMovies={props.savedMovies}
                isLikedMovie={props.isLikedMovie}
                //handleSavedMovie={props.onModDeleteSavedMovie, props.onSaveMovie}
                moviesButton={!props.moviesButton}
                handleSavedMovie={props.handleSavedMovie}
                onLike={props.onLikeClick}
        onDelete={props.onDeleteClick}
        //savedMovies={props.savedMoviesList}

                //isPreloader={props.isPreloader && <Preloder />}
              />
      <Footer />
    </>
  );
}

export default Movies;
