import './Movies.css';
import Header from '../Header/Header';
import SeachForm from '../SeachForm/SeachForm';
import Preloder from '../Preloader/Preloader';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';

function Movies() {
  return (
    <>
      <Header />
      <SeachForm />
      <div className='preloader'>
        <Preloder />
      </div>
      <section className='movies'>
        <MoviesCardList />
      </section>
        {/* <h2 className='form__title'>Нет фильмов</h2> */}
      <div className='movies__more'>
        <button
          className='movies__button-more'>Ещё
        </button>
      </div>
      <Footer />
    </>
  );
}

export default Movies;
