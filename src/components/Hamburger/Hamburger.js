import './Hamburger.css';

function Hamburger({ handleHamburger }) {
  
  return (
    <>
      <button
        type='button'
        className='hamburger'
        onClick={handleHamburger}
      >
      </button>
    </>
  );
}

export default Hamburger;
