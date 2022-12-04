import React, { useState } from 'react';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import { Route, Switch, Redirect, useHistory, useLocation } from 'react-router-dom';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import * as MainApi from '../../utils/MainApi';
import * as MoviesApi from '../../utils/MoviesApi';
import Page404 from '../Page404/Page404';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

function App() {
  const [currentUser, setCurrentUser] = React.useState({});
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [movies, setMovies] = useState([]);
  const [savedMovies, setSavedMovies] = useState([]);
  const [searchMovies, setSearchMovies] = useState(true);
  const [searchSavedMovies, setSearchSavedMovies] = useState(true);
  const [isPreloader, setIsPreloader] = useState(true);
  const [isShortMovies, setIsShortMovies] = useState(false);
  //const [isLikedMovie, setIsLikedMovie] = useState(false);


  const history = useHistory();
  const location = useLocation();

  // React.useEffect(() => {
  //   if (loggedIn) {
  //     MoviesApi.getMoviesList()
  //       .then((data) => {
  //         localStorage.setItem('movies', JSON.stringify(data));
  //         //setMovies(JSON.parse(localStorage.getItem('movies')));
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       });
  //   }
  // }, [loggedIn]);

  React.useEffect(() => {
    if (loggedIn) {
      MainApi.getUserInfo()
        .then((data) => {
          setCurrentUser(data);
          console.log(data);
        })
        .catch((error) => {
          console.log(error);
        });
      // MainApi.getMovies()
      //   .then((data) => {
      //     setMovies(data);
      //     //localStorage.getItem('movies',JSON.stringify(data));
      //     //setMovies(JSON.parse(localStorage.getItem('movies')));
      //     console.log(data);
      //   })
      //   .catch((error) => {
      //     console.log(error);
      //   });
    }
  }, [loggedIn]);

  React.useEffect(() => {
    const jwt = localStorage.getItem('jwt');
    if (!jwt) {
      return;
    }
    MainApi.getUserInfo()
      .then(() => {
        setLoggedIn(true);
        history.push(location.pathname );
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  

  // function handleMovieLike(movie) {
  //   const isLiked = savedMovies.some((i) => i.id === movie.id);
  //   MainApi.changeLikeMovieStatus(movie._id, !isLiked ? "PUT" : "DELETE")
  //     .then((newCard) => {
  //       setSavedMovies((movies) => {
  //         return movies.map((c) => {
  //           return c._id === movie.id ? newCard : c;
            
  //         });
  //       });
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }

  React.useEffect(() => {
    if (loggedIn && location.pathname === '/movies') {
      setIsPreloader(true);
      MoviesApi.getMoviesList()
        .then((res) => {
          if (res.length) {
            localStorage.setItem('movies', JSON.stringify(res.filter((item) => (item.image && item.country && item.nameEN && item.director && item.trailerLink.startsWith('http')))));
            setMovies(JSON.parse(localStorage.getItem('movies')));
            setSearchMovies(true);
            } else {
              setSearchMovies(false);
            }
        })
        .catch((err) => {
          setSearchMovies(false);
          console.log(`Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз. ${err}`)
          })
        .finally(() => {
          setIsPreloader(false);
        });
    }
  }, [loggedIn, location]);

  React.useEffect(() => {
    setIsPreloader(true);
    if (loggedIn && (location.pathname === '/saved-movies' || location.pathname === '/movies')) {
      MainApi.getMovies()
        .then((res) => {
          if (res.length) {
            console.log(res);
            const ownerSavedMovies = res.filter(i => (i.owner === currentUser._id));
            localStorage.setItem('savedMovies', JSON.stringify(ownerSavedMovies));
            setSavedMovies(JSON.parse(localStorage.getItem('savedMovies')));
            setSearchSavedMovies(true);
            console.log(res);
          } else {
            setSearchSavedMovies(false);
          }
        })
        .catch((err) => {
          setSearchSavedMovies(false);
          console.log(`Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз. ${err}`)
        })
        .finally(() => {
          setIsPreloader(false);
        });
    }
}, [loggedIn, location, currentUser]);

function handleMovieLike(movie) {
  //const isLikedMovie = savedMovies.some((i) => +i.movieId === movie.id);
  MainApi.createMovie(movie)
      .then((newSavedMovie) => {
          localStorage.setItem('savedMovies', JSON.stringify(newSavedMovie));
          setSavedMovies([JSON.parse(localStorage.getItem('savedMovies')), ...savedMovies]);
      })
      .catch((err) => {
          console.log(`Ошибка при сохранения фильма: ${err}`);
      });
}

// function handleSavedMovie(movie){
//   console.log(movie);
//   MainApi.createMovie(movie)
//     .then((newMovie) => {
//       //localStorage.setItem('saved-movies',JSON.stringify(newMovie));
//       //setSavedMovies([JSON.parse(localStorage.getItem('savedMovies')), ...savedMovies]);
//       setSavedMovies([newMovie, ...savedMovies]);
//     })
//     .catch(err => console.log(err))
// }
 function isLikedMovies(movie) {
    return savedMovies.some((i) => +i.movieId === movie.id)
  }

  function onSearch(movie) {
    if (movie) {
      let token;
      let setAllMovies;
      let setSearch;
      if (location.pathname === '/movies') {
          token = 'movies';
          setAllMovies = setMovies;
          setSearch = setSearchMovies;
      } else {
          token = 'savedMovies';
          setAllMovies = setSavedMovies;
          setSearch = setSearchSavedMovies;
      }
      const movies = JSON.parse(localStorage.getItem(token));
      const searchMovies = movies.filter((i) => (i.nameRU.toLowerCase().includes(movie.toLowerCase())) && (isShortMovies ? i.duration < 40 : ''));
      if (searchMovies.length) {
        setSearch(true);
          setAllMovies(searchMovies);
      } else {
        setSearch(false);
      }
    }
  }
  
  // function onSearch(value) {
  //   setIsMoviesLoaging(true);
  //   setSearchQuery(value);
  //   localStorage.setItem('searchQuery', value);

  //   if (!allMovies.length) {
  //     console.log("Cтейт allMovies пустой")
  //     getAllMovies()
  //       .then((data) => {
  //         setAllMovies(data);
  //         setIsSavedSearchedMovie(false)
  //         localStorage.setItem('allMovies', JSON.stringify(data)); // тестово
  //         handleSetFilteredMovies(data, value);
  //       })
  //       .catch((err) => {
  //         setIsError(true);
  //         console.log(err);
  //       })
  //       .finally(() => setIsMoviesLoaging(false))
  //   } else {
  //     console.log("allMovies имеет данные")
  //     handleSetFilteredMovies(allMovies, value);
  //     setIsMoviesLoaging(false);
  //   }
  // }

  // function onSearch(value) {
  //   setSavedMovies(true);
  //   setSearchSavedMovies(value);
  //   localStorage.setItem('searchQuery', value);

  //   if (!movies.length) {
  //     console.log("Cтейт allMovies пустой")
  //     MainApi.getMovies()
  //       .then((data) => {
  //         setMovies(data);
  //         setSearchSavedMovies(false);
  //         localStorage.setItem('movies', JSON.stringify(data));
  //         //handleSetFilteredMovies(data, value);
  //       })
  //       .catch((err) => {
      
  //         console.log(err);
  //       })
  //       .finally(() => setSavedMovies(false))
  //   } else {
  //     console.log("allMovies имеет данные")
  //     //handleSetFilteredMovies(movies, value);
  //     setSavedMovies(false);
  //   }
  // }

  function onSearchShort() {
    setIsShortMovies(!isShortMovies);
  }

  // function isLikedMovie() {
  //   setIsLikedMovie(movie);
  // }

  // function handleMovieLike(movie) {
  //   const isLiked = savedMovies.some((i) => +i.movedId === movie.id);
  //   MainApi.changeLikeMovieStatus(movie, isLiked)
  //     .then((newSavedMovie) => {
  //       setSavedMovies((movies) => {
  //         return movies.map((c) => {
  //           return c.id === movie.id ? newSavedMovie : c;
  //         });
  //       });
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  //}

  // function handleMovieLike(movie) {
  //   //const isLiked = savedMovies.some((i) => +i.movedId === movie.id);
  //   MainApi.saveMovie(movie)
  //     .then((newSavedMovie) => {
  //       localStorage.setItem('savedMovies', JSON.stringify(newSavedMovie));
  //       setSavedMovies([JSON.parse(localStorage.getItem('savedMovies')), ...savedMovies]);
  //       })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }

  // function isLikedMovie(movie) {
  //   return savedMovies.some((item) => +item.movieId === movie.id);
  // }

  function handleMovieDelete (movie) {
    MainApi.deleteMovie(movie.movieId)
      .then(() => {
        const res = savedMovies.filter((item) => item.movieId !== movie.movieId);
        localStorage.setItem('savedMovies', JSON.stringify(res));
        setSavedMovies(JSON.parse(localStorage.getItem('savedMovies')));
          if (!JSON.parse(localStorage.getItem('savedMovies')).length)
            setSearchSavedMovies(false);
          })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleLogin({ values }) {
    MainApi.authorize({ values })
      .then((res) => {
        if (res) {
          localStorage.setItem('jwt', res.token);
          setLoggedIn(true);
          history.push('/movies');
          console.log({values});
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleRegister({ values }) {
    MainApi.register({ values })
      .then((res) => {
        if (res) {
          history.push('/movies');
        }
      })
      .catch((err) => {
        history.push('/');
        console.log(err);
      });
  }

  function handleSignOut() {
    setCurrentUser({});
    setLoggedIn(false);
    history.push('/');
  }

  function handleUpdateUser(data) {
    MainApi.setUserInfo(data)
      .then((res) => {
        setCurrentUser(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (   
    <CurrentUserContext.Provider value={currentUser}>
      <div className='root'>
        <Switch>
          <Route exact path='/'>
            <Main
              loggedIn={loggedIn}
            />
          </Route>
          <ProtectedRoute 
            path='/movies'
            component={Movies}
            loggedIn={loggedIn}
            movies={movies}
            savedMovies={savedMovies}
            isLikedMovies={isLikedMovies}
            onMovieCreate={handleMovieLike}
            searchMovies={searchMovies}
            onSearch={onSearch}
            onSearchShort={onSearchShort}
            isPreloader={isPreloader}

          />
          <ProtectedRoute 
            path='/saved-movies'
            component={SavedMovies}
            loggedIn={loggedIn}
            //movies={movies}
            savedMovies={savedMovies}
            searchSavedMovies={searchSavedMovies}
          
            onSearch={onSearch}
            onSearchShort={onSearchShort}
            onMovieDelete={handleMovieDelete}
            handleMovieDelete={handleMovieDelete}
            isPreloader={isPreloader}
          />
          <ProtectedRoute
            path='/profile'
            component={Profile}
            loggedIn={loggedIn}
            onUpdateUser={handleUpdateUser}
            handleSignOut={handleSignOut}
          />
          <Route path='/signin'>
            <Login 
              onLogin={handleLogin} 
            />
          </Route>
          <Route path='/signup'>
            <Register 
              onRegister={handleRegister}
            />
          </Route>
          {/* <Route>
            {loggedIn ? <Redirect to='/movies' /> : <Redirect to='/'/>}
          </Route> */}
          <Route path='*'> 
            <Page404 />
          </Route>
        </Switch>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
