import store from './store'

export const BASE_URL = 'http://www.omdbapi.com/'

export const search = (query) =>
  fetch(
    BASE_URL +
      '?' +
      new URLSearchParams({
        apikey: import.meta.env.VITE_API_KEY,
        t: query
      })
  )
    .then((data) => data.json())
    .then((json) => {
      if (!(json.Response === 'False')) {
        store.commit('append', json)
      }
    })
