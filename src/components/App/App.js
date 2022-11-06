import React, { useState } from 'react'
import { Route, Switch } from 'react-router-dom';
//import Header from '../Header/Header';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Page404 from '../Page404/Page404';

function App() {
  const [isHamburger, setIsHamburger] = useState(false);

  function onHandleHamburger() {
    setIsHamburger(!isHamburger);
}

return (   
    <div className='root'>
      <Switch>
          <Route exact path='/'> 
            <Main
            hamburger={{isHamburger, setIsHamburger}}
            onHandleHamburger={onHandleHamburger}
          />
          </Route>
          <Route path='/movies'>
            <Movies />
          </Route>
          <Route path='/saved-movies'>
            <SavedMovies />
          </Route>
          <Route path='/profile'>
            <Profile />
          </Route>
          <Route path='/signup'>
            <Register />
          </Route>
          <Route path='/signin'>
            <Login />
          </Route>
          <Route path='*'> 
            <Page404 />
          </Route>
      </Switch>
    </div>
  );
}

export default App;
