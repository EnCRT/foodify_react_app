export const BASE_URL = 'https://www.themealdb.com/api/json/v1/1';


export const request = (url, option = { method: 'GET' }) => {
  return fetch(`${BASE_URL}${url}`, option)
    .then(response => {
      if (!response.ok) {
        throw new Error(`${response.status} - ${response.statusText}`);
      }

      return response.json();
    });
};
