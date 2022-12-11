import React from "react";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import { Route, Switch, useHistory, useLocation } from "react-router-dom";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import Profile from "../Profile/Profile";
import Register from "../Register/Register";
import Login from "../Login/Login";
import * as MainApi from "../../utils/MainApi";
import Page404 from "../Page404/Page404";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function App() {
  const [currentUser, setCurrentUser] = React.useState({});
  const [loggedIn, setLoggedIn] = React.useState(false);

  const history = useHistory();
  const location = useLocation();

  React.useEffect(() => {
    const jwt = localStorage.getItem("jwt");
    if (!jwt) {
      return;
    }
    MainApi.getUserInfo()
      .then((data) => {
        setCurrentUser(data);
        setLoggedIn(true);
        history.push(location.pathname);
      })
      .catch((err) => {
        console.error(err);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loggedIn]);

  function handleLogin({ values }) {
    MainApi.authorize({ values })
      .then((res) => {
        if (res) {
          localStorage.setItem("jwt", res.token);
          setLoggedIn(true);
          history.push("/movies");
        }
      })
      .catch((err) => {
        console.error(err);
      });
  }

  function handleRegister({ values }) {
    MainApi.register({ values })
      .then((res) => {
        if (res) {
          history.push("/movies");
        }
      })
      .catch((err) => {
        history.push("/");
        console.error(err);
      });
  }

  function handleSignOut() {
    localStorage.removeItem("jwt");
    localStorage.removeItem("searchValue");
    setCurrentUser({});
    setLoggedIn(false);
    history.push("/");
  }

  function handleUpdateUser(data) {
    MainApi.setUserInfo(data)
      .then((res) => {
        setCurrentUser(res);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="root">
        <Switch>
          <Route exact path="/">
            <Main loggedIn={loggedIn} />
          </Route>
          <ProtectedRoute
            path="/movies"
            loggedIn={loggedIn}
            component={Movies}
          />
          <ProtectedRoute
            path="/saved-movies"
            component={Movies}
            loggedIn={loggedIn}
          />
          <ProtectedRoute
            path="/profile"
            component={Profile}
            loggedIn={loggedIn}
            onUpdateUser={handleUpdateUser}
            handleSignOut={handleSignOut}
          />
          <Route path="/signin">
            <Login onLogin={handleLogin} />
          </Route>
          <Route path="/signup">
            <Register onRegister={handleRegister} />
          </Route>
          <Route path="*">
            <Page404 />
          </Route>
        </Switch>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
