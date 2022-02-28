import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://ecomm-full.herokuapp.com/api'
})

export default instance

// https://ecomm-full.herokuapp.com
