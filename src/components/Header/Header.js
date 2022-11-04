import './Header.css';
import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation.js';
import Hamburger from '../Hamburger/Hamburger';

function Header() {
  return (
    <header className='header__account'>
      <Logo />
      <Hamburger />
      <Navigation />
    </header>
  );
}

export default Header;
