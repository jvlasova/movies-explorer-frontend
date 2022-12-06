import React from 'react';
import { useFormWithValidation } from '../../hooks/useForm';
import { Link } from 'react-router-dom';
import Form from '../Form/Form';
import Logo from '../Logo/Logo';

function Register({ onRegister }) {
  const { values, handleChange, resetForm, errors, isValid } = useFormWithValidation();

  function handleSubmit(e) {
    e.preventDefault();
    onRegister({ values });
  }

  React.useEffect(() => {
    if (!onRegister) {
      resetForm(onRegister, {}, true);
    }
  }, [onRegister, resetForm]);

  return (
    <Form 
      name='register' 
      onSubmit={handleSubmit}
      >
      <div className='auth__header'>
        <Logo />
        <h1 className='auth__title'>Добро пожаловать!</h1>
      </div>
      <div className='auth__container'>
        <label className='auth__input-label' htmlFor='name'>
          Имя
        </label>
        <input
          id='name'
          className='auth__input'
          name='name'
          type='text'
          placeholder='Введите имя'
          value={values?.name || ''}
          onChange={handleChange}
          required
          minLength='2'
          maxLength='30'
          pattern='^[A-Za-zА-Яа-яЁё -]+$'
        />
        <label className='auth__input-label' htmlFor='login'>
          Email
        </label>
        <input
          id='login'
          className='auth__input'
          name='login'
          type='text'
          placeholder='Введите email'
          value={values?.login || ''}
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
          value={values?.password || ''}
          onChange={handleChange}
          required
          minLength='2'
          maxLength='30'
        />
        <span className={`input__text-error ${errors.name || errors.login || errors.password ? 'input__text-error_visible' : ''}`}>
          Что-то пошло не так...
        </span>
      </div>
      <div className='auth__footer'>
        <button 
          type='submit' 
          aria-label='Зарегистрироваться'
          className={`auth__register-button ${
            !isValid && 'auth__register-button_disabled'
          }`}
        >
          Зарегистрироваться
        </button>
        <p className='auth__text'>
          Уже зарегистрировались?
          <Link to='/signin' className='auth__link'>
            Войти
          </Link>
        </p>
      </div>
    </Form>
  );
};

export default Register;
