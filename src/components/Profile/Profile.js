import './Profile.css';
import Header from '../Header/Header';

function Profile() {
  return (
    <section className='profile'>
      <Header />
      <h1 className='form__title'>Привет, Виталий!</h1>
      <form name='formProfile' className='form__input-label'>
        <div className='form__field'>Имя
          <input
            type='text'
            name='name'
            className='form__input'
            minLength='2'
            maxLength='30'
            />Виталий
        </div>
        <div className='form__field'>Email
          <input
            type='email'
            name='email'
            className='form__input'
            minLength='6'
            maxLength='30'
          />123@123.ru
        </div>
      </form>
      <div className='form__button'>
      <button
          type='button'
          aria-label='Редактировать'
          className='form__edit'
      >
        Редактировать
      </button>
      <button
          type='button'
          aria-label='Выйти из аккаунта'
          className='form__logout'
      >
        Выйти из аккаунта
      </button>
      </div>
    </section>
  );
};

export default Profile;
