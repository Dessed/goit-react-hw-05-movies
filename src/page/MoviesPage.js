import { useEffect, useState } from "react";
import { fetchMovies } from "components/api/api";

export const MoviesPage = () => {
    const [name, setName] = useState(null);
    const [movies, setMovies] = useState(null);

    const handleChange = e => {
        console.log(e.target.value);
        setName(e.target.value);
    }; 

    console.log(name);

    useEffect(() => {
        const Movies = async() => {
            try {
                await fetchMovies().then(response => console.log(response.data))
        } catch {
            console.log('Error Movies');
        }
    };
        Movies();
    }, []);

    return (
        <>
        <form>
            <input
                type="text"
                autoComplete="off"
                autoFocus
                placeholder="Введите название фильма"
                onChange={handleChange}>
            </input>
            <button type="submit">
                <label>Поиск</label>
            </button>
        </form>
        </>
    );
};