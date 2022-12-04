import React from 'react';
import './SearchForm.css';
import { useFormWithValidation } from '../../hooks/useForm';
import search_blue from '../../images/seach/seach_blue.svg'
import search_grey from '../../images/seach/seach_grey.svg'

function SeachForm({ onSearch, onSearchShort, onSubmit }) {
  const { values, errors, handleChange, resetForm, setValues, setIsValid } = useFormWithValidation();

  // function handleSubmitSeachForm(e) {
  //   e.preventDefault();
  //   props.onSearch(values);
  // }

  // React.useEffect(() => {
  //   if (!props.savedMoviesBlock) {
  //     if(localStorage.getItem('seach')) {
  //       setValues({seach : localStorage.getItem('seach')});
  //       setIsValid(true);
  //     }
  //   }
  // }) 

  function handleSubmitSeachForm(e) {
    e.preventDefault();
    if (!values.search) {
      return;
    }
    onSearch({setValues });
  }

  React.useEffect(() => {
    if (!onSearch) {
      resetForm(onSearch, {}, true);
    }
  }, [onSearch, resetForm]);


  /** Поиск фильма */
  // function handleSubmitSeachForm(event) {
  //     event.preventDefault();

  //     searchMovies.onSearchSubmit(searchedMovies);
  // }

  // React.useEffect(() => {
  //   onSearch({ setValues });
  // }, [onSearchShort]);

  return (
    <form name='search' className='form-search' onSubmit={onSubmit}>
      <div className='form-search__container'>
        <img className='form-search__image_grey' src={search_grey} alt='Search' />
        <input
          id='search'
          className='form-search__input'
          name='search'
          type='text'
          placeholder='Фильм'
          value={values.search || ''}
          onChange={handleChange}
          required
        />
        <button 
          type='button'
          aria-label='Поиск'
          className='form-search__button'
          onClick={handleSubmitSeachForm}
        >
          <img className='form-search__image_blue' src={search_blue} alt='Search' />
        </button>
      </div>
      <span className={`input__text-error ${errors.search ? 'input__text-error_visible' : ''}`}>
        Нужно ввести ключевое слово
      </span>
      <div className='form-search__border'></div>
      <label className='form-search__toggle'>
        <input
          type='checkbox'
          name='checkbox'
          className={`toggle ${onSearchShort} ? 'toogle_search' : ''}`}
          onChange={handleChange}
          onClick={onSearch}
        />
        <span className={`toggle__turn ${onSearchShort} ? toggle__turn_search : ''}`}></span>
        <span className='form-search__text'>Короткометражки</span>
      </label>
    </form>
  );
};

export default SeachForm;
