import React from 'react';
import Form from '../Form/Form';
import Logo from '../Logo/Logo';

function Login() {
  return (
    <Form 
      name='form' 
      button='Войти' 
      text='Ещё не зарегистрированы?' 
      link='Регистрация'
    >
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
    </Form>
  );
};

export default Login;
