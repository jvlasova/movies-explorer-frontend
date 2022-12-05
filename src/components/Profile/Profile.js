import React from "react";
import "./Profile.css";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { useFormWithValidation } from "../../hooks/useForm";
import Header from "../Header/Header";

function Profile({ loggedIn, onUpdateUser, handleSignOut }) {
  const currentUser = React.useContext(CurrentUserContext);
  const { values, handleChange, errors, isValid, resetForm } =
    useFormWithValidation();

  React.useEffect(() => {
    if (currentUser) {
      resetForm(currentUser, {}, true);
    }
  }, [currentUser, resetForm]);

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateUser(values);
  }

  return (
    <section className="profile">
      <Header loggedIn={loggedIn} />
      <h1 className="form__title">{`Привет, ${currentUser.name}!`}</h1>
      <form
        name="formProfile"
        className="form__input-label"
        onSubmit={handleSubmit}
      >
        <label className="form__field" htmlFor="name">
          Имя
          <input
            id="name"
            className="form__input"
            name="name"
            value={values?.name || ""}
            onChange={handleChange}
            minLength="2"
            maxLength="30"
            pattern="^[A-Za-zА-Яа-яЁё -]+$"
          />
        </label>
        <label className="form__field" htmlFor="email">
          Email
          <input
            id="email"
            className="form__input"
            name="email"
            value={values?.email || ""}
            onChange={handleChange}
            minLength="2"
            maxLength="30"
            pattern="^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$"
          />
        </label>
        <span
          className={`input__text-error ${
            errors.name || errors.login || errors.password
              ? "input__text-error_visible"
              : ""
          }`}
        >
          Что-то пошло не так...
        </span>
        <div className="form__button">
          <button
            aria-label="Редактировать"
            className={`form__edit ${!isValid && "form__edit_disabled"}`}
          >
            Редактировать
          </button>
          <button
            type="button"
            aria-label="Выйти из аккаунта"
            className="form__logout"
            onClick={handleSignOut}
          >
            Выйти из аккаунта
          </button>
        </div>
      </form>
    </section>
  );
}

export default Profile;
