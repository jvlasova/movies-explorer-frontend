import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import Preloder from '../Preloader/Preloader';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';

function SavedMovies(props) {
  
  return (
    <>
      <Header 
        loggedIn={props.loggedIn}
      />
      <SearchForm 
        handleSubmitSeachForm={props.handleSubmitSeachForm}
      />
      { props.isPreloder &&
       
          <Preloder />
   
      }
      <MoviesCardList
      //key={props.movie._id}
        //movies={props.savedMovies}
        savedMovies={props.savedMovies}
        handleSaveMovie={props.handleMovieDelete}
        handleMovieDelete={props.handleMovieDelete}
        onMovieCreate={props.handleSavedMovie}
      />
      <Footer />
    </>
  );
}

export default SavedMovies;
