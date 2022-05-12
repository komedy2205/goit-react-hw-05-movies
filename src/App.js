import { Route, Routes, Navigate } from 'react-router-dom';
import { Layout } from './Views/Layout';
import HomePage from './Views/HomePage';
import MoviesPage from './Views/MoviesPage';
import { MovieDetailsPage } from './Views/MovieDetailsPage';
import Cast from './Views/Cast';
import Reviews from './Views/Reviews';
// import NotFound from './Views/NotFound';
import './App.css';

export default function App() {
  return (
    <>  
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="movies" element={<MoviesPage />}>
              <Route path="movies/:movieId" element={<MovieDetailsPage />}>
                <Route path="cast" element={<Cast />} />
                <Route path="reviews" element={<Reviews />} />
              </Route>
            </Route>
            <Route path="*" element={<Navigate to={'/'} replace />} />
          </Route>
        </Routes>
    </>
  );
}

// function Cast() {
//     let { movieId } = useParams();
//     return <h3>Cast {movieId}</h3>;
// };

// https://api.themoviedb.org/3/movie/76341?api_key=61c9e18fb4466748bc8d7dbd239ed6c5