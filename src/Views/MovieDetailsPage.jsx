import { Outlet, useParams } from "react-router-dom";
import { useState, useEffect } from 'react';

export const MovieDetailsPage = () => {
    const { movieId } = useParams();
    const [movie, setMovie] = useState(null);
    
    // console.log('movieId: ', movieId);
    // console.log('movie: ', movie);

    const showError = () => {
        alert('Oooops, something went wrong!')
    };

    useEffect(() => {
        const getMovie = movieId => {
            return fetch(
                `https://api.themoviedb.org/3/movie/${movieId}?api_key=61c9e18fb4466748bc8d7dbd239ed6c5&append_to_response=videos,images`)
                .then(res => {
                    if (!res.ok) {
                        throw Error(res.statusText);
                    }
                    return res.json();
                });
        }

        getMovie(movieId)
            .then(movie => {
                setMovie([movie]);
                // console.log(movie)
            })
            .catch(showError);
    }, [movieId]);

    return (
        <>
            {movie && (
                <ul>
                    {movie.map(({ id, poster_path, original_title, vote_average, overview }) => (
                    <li key={id}>
                        <img src={poster_path} alt={original_title} />
                        <p>{original_title}</p>
                        <p>{vote_average}</p>
                        <p>{overview}</p>
                    </li>
                ))}
                </ul>
            )}
            <hr/>
            <Outlet />
        </>
    )
};



