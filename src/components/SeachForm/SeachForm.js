import './SeachForm.css';
import seach_blue from '../../images/seach/seach_blue.svg'
import seach_grey from '../../images/seach/seach_grey.svg'

function SeachForm() {
  return (
    <form className='form-seach'>
      <div className='form-seach__container'>
        <img className='form-seach__image' src={seach_grey} alt='Seach' />
        <input
          className='form-seach__input'
          name='seach'
          type='seach'
          placeholder='Фильм'
          required
        />
        <button 
          type='button'
          aria-label='submit'
          className='form-seach__button'
        >
          <img className='form-seach__image' src={seach_blue} alt='Seach' />
        </button>
      </div>
      <div className='form-seach__border'></div>
      <div className='form-seach__toggle'>
        <button
          type='button'
          aria-label='Поиск корометражек'
          className='toggle'
        >
          <div className='toggle__turn'></div>
        </button>
        <p className='form-seach__text'>Короткометражки</p>
      </div>
    </form>
  );
};

export default SeachForm;
