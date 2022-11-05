import './Hamburger.css';

function Hamburger(props) {
  const {
    onHandleHamburger
  } = props;

  return (
     <button
      type='button'
      className='hamburger'
      onClick={onHandleHamburger}
     >
    </button>
  );
}

export default Hamburger;
