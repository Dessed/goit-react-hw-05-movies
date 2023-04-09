import { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { fetchTrending } from "components/api/api";
import { GalleryTrendImgage, Image } from "./HomePage.styled";

const BASE_URL = 'https://image.tmdb.org/t/p/';
const sizeImage = 'w500';

export const HomePage = () => {
    const [trends, setTrends] = useState(null);
    // let [searchParams, setSearchParams] = useSearchParams();
    // console.log(searchParams.get('item'));
    
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

    return (
        <>
        <h1>Новинки</h1>
        <GalleryTrendImgage>
            {trends && trends.map(({id, backdrop_path, title, name}) => 
            <Image key={id}>
            <Link to={`/movies/${id}`}>
            <img src={`${BASE_URL}/${sizeImage}${backdrop_path}`} alt={title || name}/>
            <p>{title || name}</p>
            </Link>
            </Image>)}
        </GalleryTrendImgage>
        </>
    )
}