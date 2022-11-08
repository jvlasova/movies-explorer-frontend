import './Page404.css';
import { Link } from "react-router-dom";

function Page404() {
  return (
    <section className='page404'>
      <h1 className='page404__title'>404</h1>
      <p className='page404__text'>Страница не найдена</p>
      <Link className='page404__link' to='/'>
        Назад
      </Link>   
    </section>
  );
}

export default Page404;
