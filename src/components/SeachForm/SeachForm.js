import './SeachForm.css';
import seach from '../../images/seach/seach.svg'
import seach_grey from '../../images/seach/seach_grey.svg'

function SeachForm() {
  return (
    <form className='form-seach'>
      <div className='form-seach__container'>
      <button 
          type='button'
          aria-label='Поиск'
          className='form-seach__button'
        >
          <img className='form-seach__image' src={seach_grey} alt='Seach' />
        </button>
        <input
          className='form-seach__input'
          name='seach'
          type='seach'
          placeholder='Фильм'
        />
        <button 
          type='button'
          aria-label='Поиск'
          className='form-seach__button'
        >
          <img className='form-seach__image' src={seach} alt='Seach' />
        </button>
      </div>
      <div className='form-seach__border'></div>
      <div className='form-seach__toggle'>
        <p className='form-seach__text'>Короткометражки</p>
        <button
          type='button'
          aria-label='Поиск корометражек'
          className='toggle'
        >
        <div className='toggle__turn'></div>
        </button>
      </div>
    </form>
  );
};

export default SeachForm;
