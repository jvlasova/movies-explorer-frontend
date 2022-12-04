export const BASE_URL_MAIN = 'http://localhost:4000';
//export const BASE_URL_MAIN = 'https://api.jvlasova.movies.nomoredomains.icu';
export const BASE_URL_MOVIES = 'https://api.nomoreparties.co';

const handleResponse = (res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Error: ${res.status}`);
}

export const register = ({ values }, token) => {
  return fetch(`${BASE_URL_MAIN}/signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
    credentials: 'include',
    body: JSON.stringify({ 
      'name': values.name,
      'email': values.login,
      'password': values.password
    })
  })
  .then((res => handleResponse(res)));
}

export const authorize = ({ values }, token) => {
  return fetch(`${BASE_URL_MAIN}/signin`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
    credentials: 'include',
    body: JSON.stringify({ 
      'email': values.login,
      'password': values.password
    })
  })
  .then((res => handleResponse(res)));
}

export const signOut = (token) => {
  return fetch(`${BASE_URL_MAIN}/signin`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      credentials: 'include'
  })
  .then((res => handleResponse(res)));
}

export const getUserInfo = (token) => {
  return fetch(`${BASE_URL_MAIN}/users/me`, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('jwt')}`,
    },
    credentials: 'include',
  })
  .then((res => handleResponse(res)));
}

export const setUserInfo = (data, token) => {
  return fetch(`${BASE_URL_MAIN}/users/me`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
    body: JSON.stringify({ 
      name: data.name,
      email: data.email
    }),
    credentials: 'include',
  })
  .then((res => handleResponse(res)));
}

export const getMovies = (token) => {
  return fetch(`${BASE_URL_MAIN}/movies`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('jwt')}`,
    },
    credentials: 'include',
  })
  .then((res => handleResponse(res)))
}

export const createMovie = (data, token) => {
  return fetch(`${BASE_URL_MAIN}/movies`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('jwt')}`,
    },
    credentials: 'include',
    body: JSON.stringify(
   {
      //_id: movie.id,
      country: data.country,
      director: data.director,
      duration: data.duration,
      year: data.year,
      description: data.description,
      image: data.image,
      //image: `${BASE_URL_MOVIES}${movie.image.url}`,
      trailer: data.trailerLink,
      movieId: data.id,
      nameRU: data.nameRU,
      nameEN: data.nameEN,
      //thumbnail: `${BASE_URL_MOVIES}${movie.image.formats.thumbnail.url}`,
      thumbnail: data.thumbnail
   }),
  }).then((res => handleResponse(res)))
}

// export const changeLikeMovieStatus = (_id, like, token) => {
//   return fetch(`${BASE_URL_MAIN}}/movies${_id}`, {
//     method: like ? 'DELETE' : 'PUT',
//     headers : {
//       'Content-Type': 'application/json',
//       'Authorization': `Bearer ${token}`,
//     },
//     credentials: "include",
//   })
//   .then((res => handleResponse(res)))
// }

export const deleteMovie = (movieId) => {
  return fetch(`${BASE_URL_MAIN}/movies/${movieId}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('jwt')}`,
    },
    credentials: 'include',
  })
  .then((res => handleResponse(res)))
}
