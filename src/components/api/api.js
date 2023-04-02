import axios from 'axios';

export  const  fetchTrending = async () => {
    const KEY_API = '07938c7ebf6d416fb8ed09357d49414d';
    const response = await axios.get(`https://api.themoviedb.org/3/trending/all/week?api_key=${KEY_API}&language=ru`);
    return response;
  };

export  const  fetchMovies = async (movieId) => {
    console.log(movieId);
    const KEY_API = '07938c7ebf6d416fb8ed09357d49414d';
    // const response = await axios.get(`https://api.themoviedb.org/3//movie/500?api_key=${KEY_API}`);
    const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${KEY_API}&language=ru`);
    return response;
  };