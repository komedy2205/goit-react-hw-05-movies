import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";

export default function HomePage() {
    const [movies, setMovies] = useState(null);

    const showError = () => {
        alert('Oooops, something went wrong!')
    };

    useEffect(() => {
        const getMovies = () => {
            return fetch(
                'https://api.themoviedb.org/3/movie/660?api_key=61c9e18fb4466748bc8d7dbd239ed6c5')
                .then(res => {
                    if (!res.ok) {
                        throw Error(res.statusText);
                    }
                    return res.json();
                });
        }

        getMovies()
            .then(movie => {
                setMovies([movie]);
                // console.log(movie)
            })
            .catch(showError);
        }, []);

    return (
        <ul>
            {movies &&
                movies.map(movie => (
                    <li key={movie.id}>
                        <Link to={`${movie.id}`}>{movie.original_title}</Link>
                    </li>
                ))}
            <Outlet/>
        </ul>
    )
}

// poster_path