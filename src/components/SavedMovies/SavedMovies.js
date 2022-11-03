import Header from '../Header/Header';
import SeachForm from '../SeachForm/SeachForm';
import Preloder from '../Preloader/Preloader';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';

function SavedMovies() {
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
        {/* <h2 className='form__title'>Нет сохраненных фильмов</h2> */}
      <Footer />
    </>
  );
}

export default SavedMovies;
