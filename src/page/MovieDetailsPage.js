import { useEffect, useState } from "react";
import { Outlet, useParams } from "react-router-dom";
import { fetchMovies } from "components/api/api";

const BASE_URL = 'https://image.tmdb.org/t/p/';
const sizeImage = 'w500';

export const MovieDetailsPage = () => {
    const [dataMovie, setDataMovie] = useState({});
    const {movieId} = useParams();
    console.log(movieId);
    console.log(dataMovie);
    
    useEffect(() => {
        const Movies = async() => {
            try {
                await fetchMovies(movieId).then(response => setDataMovie(response.data))
            } catch {
                console.log('Error Movies');
            }
        }
        Movies();
    }, []);

    return (
        <>
        {dataMovie && 
        <ul>
            <li>
               <p>{dataMovie.original_title}</p>
               <img src={`${BASE_URL}/${sizeImage}${dataMovie.backdrop_path}`} alt={dataMovie.title || dataMovie.name}/>
               <p>{dataMovie.release_date}</p>
               <p>Рейтинг: {dataMovie.vote_average}</p>
               {/* <p>{dataMovie.genres.name}</p> */}
               {/* <p>{dataMovie.genres.map(data => 
                    <li>{data.name}</li>)}</p> */}
                <p>{dataMovie.overview}</p>
            </li>
        </ul>}
        <Outlet />
        </>
        
    )
}