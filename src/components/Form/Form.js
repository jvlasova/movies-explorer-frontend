import React from 'react';
import './Form.css';

function Form({ form, children, onSubmit }) {

  return (
    <fieldset className='auth'>
      <form name={form} onSubmit={onSubmit}>
        {children}
      </form>
    </fieldset>
  );
}

export default Form;
