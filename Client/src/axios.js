import axios from 'axios'


const instance = axios.create({
    baseURL: 'https://getmovies-taupe.vercel.app/api/movies',
  });


export default instance