import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function HomePage() {
    const [movies, setMovies] = useState(null);

    const showError = () => {
        alert('Oooops, something went wrong!')
    };

    useEffect(() => {
        const getMovies = () => {
            return fetch(
                'https://api.themoviedb.org/3/trending/all/day?api_key=61c9e18fb4466748bc8d7dbd239ed6c5')
                .then(res => {
                    if (!res.ok) {
                        throw Error(res.statusText);
                    }
                    return res.json();
                });
        }

        getMovies()
            .then(movie => {
                setMovies(movie.results);
                // console.log(movie)
            })
            .catch(showError);
        }, []);

    return (
        <>
            {movies && (
                <ul>
                    {movies.map(movie => (
                        <li key={movie.id}>
                            <Link to={`${movie.id}`}>{movie.original_title}</Link>
                        </li>
                    ))}
                </ul>
            )}
        </>
    )
}