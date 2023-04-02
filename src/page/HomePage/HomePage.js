import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { fetchTrending } from "components/api/api";
import { GalleryTrendImgage, Image } from "./HomePage.styled";

const BASE_URL = 'https://image.tmdb.org/t/p/';
const sizeImage = 'w500';

export const HomePage = () => {
    const [trends, setTrends] = useState(null);
    

    useEffect (() => {
        const Trending = async() => {
            try {
             await fetchTrending().then(response => setTrends(response.data.results));
            }  catch {
                console.log('Error Trending');
           }
        }
        Trending();
    }, []);

    // console.log(trends);
    return (
        <>
        <h1>Новинки</h1>
        <GalleryTrendImgage>
            {trends && trends.map(movie => 
            <Image key={movie.id}>
            <Link to={`/movies/${movie.id}`}>
            <img src={`${BASE_URL}/${sizeImage}${movie.backdrop_path}`} alt={movie.title || movie.name}/>
            <p>{movie.title || movie.name}</p>
            </Link>
            </Image>)}
        </GalleryTrendImgage>

        {/* <fetchMovies movie_id={() => trends.id}/>  */}
        </>
    )
}