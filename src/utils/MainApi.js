//export const BASE_URL_MAIN = "http://localhost:4000";
export const BASE_URL_MAIN = "https://api.jvlasova.movies.nomoredomains.icu";

const handleResponse = (res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Error: ${res.status}`);
};

export const register = ({ values }) => {
  return fetch(`${BASE_URL_MAIN}/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify({
      name: values.name,
      email: values.login,
      password: values.password,
    }),
  }).then((res) => handleResponse(res));
};

export const authorize = ({ values }) => {
  return fetch(`${BASE_URL_MAIN}/signin`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("jwt")}`,
    },
    credentials: "include",
    body: JSON.stringify({
      email: values.login,
      password: values.password,
    }),
  }).then((res) => handleResponse(res));
};

export const signOut = () => {
  return fetch(`${BASE_URL_MAIN}/signin`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("jwt")}`,
    },
    credentials: "include",
  }).then((res) => handleResponse(res));
};

export const getUserInfo = () => {
  return fetch(`${BASE_URL_MAIN}/users/me`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("jwt")}`,
    },
    credentials: "include",
  }).then((res) => handleResponse(res));
};

export const setUserInfo = (data) => {
  return fetch(`${BASE_URL_MAIN}/users/me`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("jwt")}`,
    },
    body: JSON.stringify({
      name: data.name,
      email: data.email,
    }),
    credentials: "include",
  }).then((res) => handleResponse(res));
};

export const getSavedMovies = () => {
  return fetch(`${BASE_URL_MAIN}/movies`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("jwt")}`,
    },
    credentials: "include",
  }).then((res) => handleResponse(res));
};

export const markSavedMovies = (data) => {
  return fetch(`${BASE_URL_MAIN}/movies`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("jwt")}`,
    },
    credentials: "include",
    body: JSON.stringify({
      country: data.country,
      director: data.director,
      duration: data.duration,
      year: data.year,
      description: data.description,
      image: data.image,
      //image: `${BASE_URL_MOVIES}${data.image.url}`,
      trailerLink: data.trailerLink,
      movieId: Date.now(),
      nameRU: data.nameRU,
      nameEN: data.nameEN,
      thumbnail: data.thumbnail,
      //thumbnail: `${BASE_URL_MOVIES}${data.image.formats.thumbnail.url}`,
    }),
  }).then((res) => handleResponse(res));
};

export const deleteMovie = (id) => {
  return fetch(`${BASE_URL_MAIN}/movies/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("jwt")}`,
    },
    credentials: "include",
  }).then((res) => handleResponse(res));
};