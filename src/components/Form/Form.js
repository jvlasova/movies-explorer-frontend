import React from 'react';
import './Form.css';

function Form({ children }) {
  return (
    <fieldset className='auth'>
      <form name='form'>
        {children}
      </form>
    </fieldset>
  );
}

export default Form;
