import { Routes, Route, Navigate } from "react-router-dom";
import { HomePage } from "../page/HomePage/HomePage";
import { MovieDetailsPage } from "../page/MovieDetailsPage";
import { MoviesPage } from "../page/MoviesPage";
import { Cast } from "../page/Cast";
import { Reviews } from "../page/Reviews";
import { AppBar } from "./AppBar";

export const App = () => {
  return (
    <div>
      <AppBar />
      
      <Routes>
        <Route exact path="/" element={<HomePage />}/> 
        <Route path="movies" element={<MoviesPage />}/>
        <Route path="movies/:movieId" element={<MovieDetailsPage />}/>
          <Route path="cast" element={<Cast />}/>
          <Route path="reviews" element={<Reviews />}/>
        <Route path="*" element={<Navigate to='/' />}/>
      </Routes>
    </div>
  );
};
