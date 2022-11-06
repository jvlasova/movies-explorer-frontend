import './Header.css';
import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation.js';
import Hamburger from '../Hamburger/Hamburger';
import Menu from '../Menu/Menu';

function Header(props) { 
  const { 
    hamburger,
    onHandleHamburger,
  } = props;

  return (
    <>
      <Menu
        hamburger={hamburger}
        onHandleHamburger={onHandleHamburger}
      />
      <header className='header__account'>
        <Logo />
        <Hamburger />
        <Navigation />
      </header>
    </>
  );
}

export default Header;
