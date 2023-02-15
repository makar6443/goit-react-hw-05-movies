import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';
import { ToastContainer } from 'react-toastify';

import Layout from './Layout';
import HomePage  from 'pages/HomePage';

const MoviesPage = lazy(() => import('../pages/MoviesPage'));
const MovieDetailsPage = lazy(() => import('../pages/MovieDetailsPage'));
const CastPage = lazy(() => import('../pages/CastPage'));
const ReviewsPage = lazy(() => import('../pages/ReviewsPage'));

export const App = () => {
  return (
    <BrowserRouter basename='goit-react-hw-05-movies'>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />}></Route>
          <Route
            path="/movies"
            element={<MoviesPage />}
          ></Route>
          <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<CastPage />}></Route>
            <Route path="reviews" element={<ReviewsPage />}></Route>
          </Route>
        </Route>
      </Routes>
      <ToastContainer autoClose={3000} theme="colored"/>
    </BrowserRouter>
  );
};
