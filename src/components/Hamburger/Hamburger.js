import './Hamburger.css';
import hamburger from '../../images/header/hamburg.svg';

function Hamburger() {
  return (
    <div className='logo' to='/'>
      <img src={hamburger} alt='Логотип' />
    </div>
  );
}

export default Hamburger;
