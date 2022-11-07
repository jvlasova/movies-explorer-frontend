import Promo from '../Promo/Promo';
import AboutProject from '../AboutProject/AboutProject';
import Techs from '../Techs/Techs';
import AboutMe from '../AboutMe/AboutMe';
import Portfolio from '../Portfolio/Portfolio';
import Footer from '../Footer/Footer.js';
//import Header from '../Header/Header'

function Main(props) {
  // const { 
  //   hamburger,
  //   onHandleHamburger,
  // } = props;

  return (
    <>
     {/* <Header
        hamburger={hamburger}
        onHandleHamburger={onHandleHamburger}
      /> */}
      <main>
        <Promo />
        <AboutProject />
        <Techs />
        <AboutMe />
        <Portfolio />
      </main>
      <Footer />
    </>
  );
}

export default Main;
