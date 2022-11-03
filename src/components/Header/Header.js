import './Header.css';
import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation.js';

function Header() {
  return (
    <header className='header__account'>
      <Logo />
      <Navigation />
    </header>
  );
}

export default Header;
