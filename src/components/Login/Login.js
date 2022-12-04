import React from 'react';
import { useFormWithValidation } from '../../hooks/useForm';
import { Link } from 'react-router-dom';
import Form from '../Form/Form';
import Logo from '../Logo/Logo';

function Login({ onLogin }) {
  const { values, handleChange, resetForm, errors, isValid } = useFormWithValidation({ name: '', email: '', password: '' });

  function handleSubmit(e) {
    e.preventDefault();
    if (!values.login || !values.password) {
      return;
    }
    onLogin({ values });
  }

  React.useEffect(() => {
    if (!onLogin) {
      resetForm(onLogin, {}, true);
    }
  }, [onLogin, resetForm]);

  return (
    <Form name='login' onSubmit={handleSubmit}>
      <div className='auth__header'>
        <Logo />
        <h1 className='auth__title'>Рады видеть!</h1>
      </div>
      <div className='auth__container'>
        <label className='auth__input-label' htmlFor='login'>
          Email
        </label>
        <input
          id='login'
          className='auth__input'
          name='login'
          type='text'
          placeholder='Введите email'
          value={values.login || ''}
          onChange={handleChange}
          required
          minLength='2'
          maxLength='30'
          pattern='^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$'
        />
        <label className='auth__input-label' htmlFor='password'>
          Пароль
        </label>
        <input
          id='password'
          className='auth__input input__error_red'
          name='password'
          type='password'
          placeholder='Введите пароль'
          value={values.password || ''}
          onChange={handleChange}
          required
          minLength='2'
          maxLength='30'
        />
        <span className={`input__text-error ${errors.login || errors.password ? 'input__text-error_visible' : ''}`}>
          Что-то пошло не так...
        </span>
      </div>
      <div className='auth__footer'>
        <button 
          type='submit' 
          aria-label='Авторизироваться'
          className={`auth__register-button ${
            !isValid && 'auth__register-button_disabled'
          }`}
        >
          Войти
        </button>
        <p className='auth__text'>
          Ещё не зарегистрированы?
        <Link to='/signup' className='auth__link'>
          Регистрация
        </Link>
        </p>
      </div>
    </Form>
  );
};

export default Login;
