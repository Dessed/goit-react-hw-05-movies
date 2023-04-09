import { useEffect, useState, useParams } from "react";
import { fetchMoviesWord } from "components/api/api";

const BASE_URL = 'https://image.tmdb.org/t/p/';
const sizeImage = 'w500';

export const MoviesPage = () => {
    const [name, setName] = useState('');
    const [dataMovie, setDataMovie] = useState({});
    // const {movieId} = useParams();
    // console.log(movieId);
    console.log(dataMovie);

    const handleChange = e => {
        console.log(e.target.value);
        // setName(e.currentTarget.value);
    }; 
    
    const handleSubmit = e => {
        e.preventDefault();
        console.log("Ho ho ho");
        setName(e.currentTarget.value);
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
                autoFocus
                placeholder="Введите название фильма"
                onChange={handleChange}>
            </input>

            <button type='submit'>Поиск</button>
        </form>

        {dataMovie && 
        <ul> {dataMovie.results?.map(({title, backdrop_path, release_date, vote_average, genres, overview}) =>
            <li>
               <p> {title || name} </p>

               <img src={`${BASE_URL}/${sizeImage}${backdrop_path}`} alt={title || name}/>

               <p> {release_date} </p>

               <p> Рейтинг: {vote_average} </p>

               <ul> {genres?.map(({id, name}) =><li key={id}>{name}</li>)} </ul>

               <p> {overview} </p>
            </li>)}
        </ul>}
        </>
    );
};