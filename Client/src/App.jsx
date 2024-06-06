import { useState } from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import { Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import FavouritePage from './Pages/FavouritePage';

function App() {
  const [searchRes, setSearchRes] = useState([]);
  const [title, setTitle] = useState("");
  const [favoriteMovies, setFavoriteMovies] = useState([]);

  const handleFavoriteClick = (movie) => {
    setFavoriteMovies((prevFavorites) => {
      if (prevFavorites.includes(movie.id)) {
        return prevFavorites.filter((id) => id !== movie.id);
      } else {
        return [...prevFavorites, movie.id];
      }
    });
  };

  return (
    <div>
      <NavBar title={title} setTitle={setTitle} searchRes={searchRes} setSearchRes={setSearchRes} />
      <Routes>
        <Route
          path='/'
          element={
            <HomePage
              title={title}
              movies={searchRes}
              setMovies={setSearchRes}
              favoriteMovies={favoriteMovies}
              handleFavoriteClick={handleFavoriteClick}
            />
          }
        />
        <Route
          path='/favourites'
          element={
            <FavouritePage
              movies={searchRes}
              favoriteMovies={favoriteMovies}
              handleFavoriteClick={handleFavoriteClick}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
