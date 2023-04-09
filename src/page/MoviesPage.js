import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchMoviesWord } from "components/api/api";

const BASE_URL = 'https://image.tmdb.org/t/p/';
const sizeImage = 'w500';

export const MoviesPage = () => {
    const [name, setName] = useState('');
    const [dataMovie, setDataMovie] = useState({});
    // const {movieId} = useParams();
    // console.log(movieId);
    console.log(dataMovie);
    
    const handleSubmit = e => {
        e.preventDefault();
        console.log("Ho ho ho");
        const form = e.currentTarget;
        setName(form.elements.name.value);

        console.log(name);
    };

    useEffect(() => {
        const Movies = async() => {
        try {
            await fetchMoviesWord(name).then(response => setDataMovie(response.data));
        } catch {
            console.log('Error Movies');
        }
    };
        Movies();
    }, [name]);

    return (
        <>
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                autoComplete="off"
                name="name"
                autoFocus
                placeholder="Введите название фильма">
            </input>

            <button type='submit'>Поиск</button>
        </form>

        {dataMovie && 
        <ul> {dataMovie.results?.map(({id, title, backdrop_path, release_date, vote_average, genres, overview}) =>
            <li>
               <Link to={`/movies/${id}`}>
               <p> {title || name} </p>
               <img src={`${BASE_URL}/${sizeImage}${backdrop_path}`} alt={title || name}/>
               </Link>

               <p> {release_date} </p>

               <p> Рейтинг: {vote_average} </p>

               <ul> {genres?.map(({id, name}) =><li key={id}>{name}</li>)} </ul>

               <p> {overview} </p>
            </li>)}
        </ul>}
        </>
    );
};