import { useEffect, useState } from "react";
import { Outlet, useParams } from "react-router-dom";
import { fetchMoviesId } from "components/api/api";


const BASE_URL = 'https://image.tmdb.org/t/p/';
const sizeImage = 'w500';

export const MovieDetailsPage = () => {
    const [dataMovie, setDataMovie] = useState({});
    const {movieId} = useParams();
    console.log(dataMovie);
    
    useEffect(() => {
        const Movies = async() => {
            try {
                await fetchMoviesId(movieId).then(response => setDataMovie(response.data))
            } catch {
                console.log('Error Movies');
            }
        }
        Movies();
    }, [movieId]);

    const {title, poster_path, name, release_date, vote_average, genres, overview} = dataMovie;

    return (
        <>
        {dataMovie && 
        <ul>
            <li>
               <p> {title || name} </p>

               <img src={`${BASE_URL}/${sizeImage}${poster_path}`} alt={title || name}/>

               <p> {release_date} </p>

               <p> Рейтинг: {vote_average} </p>

               <ul> {genres?.map(({id, name}) =><li key={id}>{name}</li>)} </ul>

               <p> {overview} </p>
            </li>
        </ul>}
        <Outlet />
        </>
        
    )
}