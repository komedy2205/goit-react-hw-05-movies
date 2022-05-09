import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AppBar from './AppBar/AppBar';
import HomePage from './Views/HomePage';
// import MoviesPage from './Views/MoviesPage';
import MovieDetailsPage from './Views/MovieDetailsPage';
// import Cast from './Views/Cast';
// import Reviews from './Views/Reviews';
import NotFound from './Views/NotFound';
import './App.css';

export default function App() {
  return(
    <>
      <BrowserRouter>
      <AppBar/>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        {/* <Route path="movies" element={<MoviesPage />}/> */}
          <Route path=":movieId" element={<MovieDetailsPage />}/>
            {/* <Route path="cast" element={<Cast />}/> */}
            {/* <Route path="reviews" element={<Reviews/>}/> */}
        <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
  
};

// https://api.themoviedb.org/3/movie/76341?api_key=61c9e18fb4466748bc8d7dbd239ed6c5