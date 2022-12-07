import React from "react";
import "./SearchForm.css";
import { useFormWithValidation } from "../../hooks/useForm";
import search_blue from "../../images/seach/seach_blue.svg";
import search_grey from "../../images/seach/seach_grey.svg";

function SearchForm({ onSearch, isShortMovies, onToggleSearch, searchValue }) {
  const { values, errors, handleChange } =
    useFormWithValidation({ initValues: { search: searchValue } });

  function handleSubmitSearchForm(e) {
    e.preventDefault();
    if (!values.search) {
      return ;
    }
    onSearch(values.search);
  }

  return (
    <form
      name="search"
      className="form-search"
      onSubmit={handleSubmitSearchForm}
    >
      <div className="form-search__container">
        <img
          className="form-search__image_grey"
          src={search_grey}
          alt="Search"
        />
        <input
          id="search"
          className="form-search__input"
          name="search"
          type="text"
          placeholder="Фильм"
          value={values.search || ""}
          onChange={handleChange}
          required
        />
        <button
          type="button"
          aria-label="Поиск"
          className="form-search__button"
          onClick={handleSubmitSearchForm}
        >
          <img
            className="form-search__image_blue"
            src={search_blue}
            alt="Search"
          />
        </button>
      </div>
      <span
        className={`input__text-error ${
          errors.search ? "input__text-error_visible" : ""
        }`}
      >
        Нужно ввести ключевое слово
      </span>
      <div className="form-search__border"></div>
      <label className="form-search__toggle">
        <input
          type="checkbox"
          name="checkbox"
          className='toggle'
          onClick={onToggleSearch}
          value={!isShortMovies}
        />
        <span
          className={`toggle__turn ${!isShortMovies} ? toggle : ''}`}
        ></span>
        <span className="form-search__text">Короткометражки</span>
      </label>
    </form>
  );
}

export default SearchForm;
