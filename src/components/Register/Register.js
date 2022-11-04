import React from 'react';
import { Link } from 'react-router-dom';
import Form from '../Form/Form';
import Logo from '../Logo/Logo';

function Register() {
  return (
    <Form name='register'>
      <Logo />
      <h1 className='auth__title'>Добро пожаловать!</h1>
      <p className='auth__input-label'>
        Имя
      </p>
      <input
        className='auth__input'
        name='name'
        type='text'
        placeholder='Введите имя'
        required
        minLength='2'
        maxLength='30'
      />
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
        className='auth__input input-error'
        name='password'
        type='password'
        placeholder='Введите пароль'
        required
        minLength='2'
        maxLength='30'
      />
      <span className='input-text-error'>
        Что-то пошдо не так...
      </span>
      <div className='auth__container'>
        <button 
          type='submit' 
          className='auth__register-button'
          aria-label='Зарегистрироваться'
        >  
          Зарегистрироваться
        </button>
        <p className='auth__text'>
          Уже зарегистрировались?
        <Link to='./signin' className='auth__link'>
          Войти
        </Link>
        </p>
      </div>
    </Form>
  );
};

export default Register;
