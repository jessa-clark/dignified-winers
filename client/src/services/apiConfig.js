import axios from "axios"

//create promise to account for localStorage latency while getting token.
const getToken = () => {
  return new Promise(resolve => {
      resolve(`Bearer ${localStorage.getItem('token') || null}`)
  })
}

//establishing a connection based on local or production environment.
const api = axios.create({
  baseURL: process.env.NODE_ENV === 'production'
      ? 'https://dignified-winers-backend.herokuapp.com/api'
      : 'http://localhost:3000/api'
})

//grabs the request before sent and attaches the header with Bearer token.
api.interceptors.request.use(async function (config) {
  config.headers['Authorization'] = await getToken()
  return config
}, function (error) {
  console.log('Request error: ', error)
  return Promise.reject(error)
});