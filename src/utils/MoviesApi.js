export const BASE_URL_MOVIES = 'https://api.nomoreparties.co';

const handleResponse = (res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Error: ${res.status}`);
}

export const getMoviesList = () => {
  return fetch(`${BASE_URL_MOVIES}/beatfilm-movies`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
  .then((res => handleResponse(res)))
}
