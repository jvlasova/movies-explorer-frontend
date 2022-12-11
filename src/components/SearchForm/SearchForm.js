import React from "react";
import "./SearchForm.css";
import search_blue from "../../images/seach/seach_blue.svg";
import search_grey from "../../images/seach/seach_grey.svg";

function SearchForm({ onSearch, isShortMovies, onToggleSearch }) {
  const [values, setValues] = React.useState(
    () => localStorage.getItem("searchValue") || ""
  );
  const [error, setError] = React.useState("");

  const handleChange = (event) => {
    const target = event.target;
    const value = target.value;
    setValues(value);
    setError(target.validationMessage);
    localStorage.setItem("searchValue", value);
  };

  function handleSubmitSearchForm(e) {
    e.preventDefault();
    if (!values) {
      return;
    }
    onSearch(values);
  }

  return (
    <form name="search" className="form-search">
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
          value={values || ""}
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
          error ? "input__text-error_visible" : ""
        }`}
      >
        Нужно ввести ключевое слово
      </span>
      <div className="form-search__border"></div>
      <label className="form-search__toggle">
        <input
          type="checkbox"
          name="checkbox"
          className="toggle"
          onChange={onToggleSearch}
          checked={isShortMovies}
        />
        <span
          className={`toggle__turn ${isShortMovies ? "toggle" : ""}`}
        ></span>
        <span className="form-search__text">Короткометражки</span>
      </label>
    </form>
  );
}

export default SearchForm;
