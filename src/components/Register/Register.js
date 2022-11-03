import React from 'react';
import Form from '../Form/Form';
import Logo from '../Logo/Logo';

function Register() {
  return (
    <Form 
      name='form' 
      button='Зарегистрироваться' 
      text='Уже зарегистрировались?' 
      link='Войти'
    >
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
    </Form>
  );
};

export default Register;
