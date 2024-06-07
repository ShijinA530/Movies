import axios from 'axios'


const instance = axios.create({
    baseURL: 'https://movies-6.onrender.com//api/movies',
  });


export default instance