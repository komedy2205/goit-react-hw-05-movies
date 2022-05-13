import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { Section, List } from '../Styled/HomePage.styled';

export default function HomePage() {
  const [movies, setMovies] = useState(null);
  // console.log(movies)

  const showError = () => {
    alert('Oooops, something went wrong!');
  };

  useEffect(() => {
    const getMovies = () => {
      return fetch(
        'https://api.themoviedb.org/3/trending/all/week?api_key=61c9e18fb4466748bc8d7dbd239ed6c5'
      ).then((res) => {
        if (!res.ok) {
          throw Error(res.statusText);
        }
        return res.json();
      });
    };

    getMovies()
      .then(({results}) => {
        setMovies(results);
        // console.log(movie)
      })
      .catch(showError);
  }, []);

  return (
    <Section>
      {movies && (
        <ul>
          {movies.map(({ id, original_title, name}) => (
            <List key={id}>
              <Link to={`movies/${id}`}>{original_title || name}</Link>
            </List>
          ))}
        </ul>
      )}
    </Section>
  );
}