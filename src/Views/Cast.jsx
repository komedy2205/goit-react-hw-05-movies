import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function Credits() {
    const { movieId } = useParams;
    const [cast, setCast] = useState(null);
            // console.log('cast: ', cast);



    // const showError = () => {
    //     alert('Oooops, something went wrong!')
    // };

    // useEffect(() => {
    //     const getCast = () => {
    //         return fetch(
    //             `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=61c9e18fb4466748bc8d7dbd239ed6c5`)
    //             .then(res => {
    //                 if (!res.ok) {
    //                     throw Error(res.statusText);
    //                 }
    //                 return res.json();
    //             });
    //     }

    //     getCast()
    //         .then(cast => {
    //             setCast(cast);
    //             console.log(cast)
    //         })
    //         .catch(showError);
    // }, [movieId]);

    return (
        <>
            <h3>Cast</h3>
            {console.log(movieId)}

            
        </>
    )
}