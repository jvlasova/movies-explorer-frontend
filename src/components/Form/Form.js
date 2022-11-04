import React from 'react';
import './Form.css';

function Form({ children }) {
  return (
    <fieldset className='auth'>
      <form name='form' className='auth__container'>
        {children}
      </form>
    </fieldset>
  );
}

export default Form;
