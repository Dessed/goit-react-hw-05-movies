import axios from 'axios';

export  const  fetchTrending = async () => {
    const KEY_API = '07938c7ebf6d416fb8ed09357d49414d';
    const response = await axios.get(`https://api.themoviedb.org/3/trending/all/week?api_key=${KEY_API}&language=ru`);
    return response;
  };

export  const  fetchMoviesId = async (movieId) => {
    const KEY_API = '07938c7ebf6d416fb8ed09357d49414d';
    const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${KEY_API}&language=ru`);
    return response;
  };

  export  const  fetchMoviesWord = async (name) => {
    const KEY_API = '07938c7ebf6d416fb8ed09357d49414d';
    const response = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${KEY_API}&query=${name}&language=ru&page=1`);
    return response;
  };