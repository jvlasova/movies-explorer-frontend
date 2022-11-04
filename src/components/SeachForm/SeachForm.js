import './SeachForm.css';
import seach_blue from '../../images/seach/seach_blue.svg'
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
          <img className='form-seach__image' src={seach_blue} alt='Seach' />
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
        </button>
      </div>
    </form>
  );
};

export default SeachForm;
