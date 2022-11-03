import React from 'react';
import { Link } from 'react-router-dom';
import './Form.css';

function Form({ form, button, text, link, children }) {
  return (
    <fieldset className='auth'>
      <form name={form} className='auth__container'>
        {children}
      </form>
      <div className='auth__container'>
        <button type='submit' className='auth__register-button'>
          {button}
        </button>
        <p className='auth__text'>
          {text}
        <Link to='./signin' className='auth__link'>
          {link}
        </Link>
        </p>
      </div>
    </fieldset>
  );
}

export default Form;
