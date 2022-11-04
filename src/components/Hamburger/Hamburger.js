import './Hamburger.css';
import hamburger from '../../images/header/hamburger.svg';

function Hamburger() {
  return (
    <div className='hamburger' to='/'>
      <img src={hamburger} alt='Логотип' />
    </div>
  );
}

export default Hamburger;
