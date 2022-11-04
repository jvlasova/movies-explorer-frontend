import React from 'react';
import { Link } from 'react-router-dom';
import Form from '../Form/Form';
import Logo from '../Logo/Logo';

function Login() {
  return (
    <Form name='login'>
      <Logo />
      <h1 className='auth__title'>Рады видеть!</h1>
      <p className='auth__input-label'>
        Email
      </p>
      <input
        className='auth__input'
        name='login'
        type='text'
        placeholder='Введите e-mail'
        required
        minLength='2'
        maxLength='30'
      />
      <p className='auth__input-label'>
        Пароль
      </p>
      <input
        className='auth__input'
        name='password'
        type='password'
        placeholder='Введите пароль'
        required
        minLength='2'
        maxLength='30'
      />
      <div className='auth__container'>
        <button 
          type='submit' 
          className='auth__register-button'
          aria-label='Авторизироваться'
        >  
          Войти
        </button>
        <p className='auth__text'>
          Ещё не зарегистрированы?
        <Link to='./signup' className='auth__link'>
          Регистрация
        </Link>
        </p>
      </div>
    </Form>
  );
};

export default Login;
