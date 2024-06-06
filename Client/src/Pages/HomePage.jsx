import React from 'react';
import Banner from '../components/Banner/Banner';
import RowPost from '../components/RowPost/RowPost';

function HomePage({ title, movies, setMovies, favoriteMovies, handleFavoriteClick }) {
  return (
    <div>
      {title.length === 0 && <Banner />}
      {title.length === 0 ? (
        <RowPost
          title='Movies'
          movies={movies}
          setMovies={setMovies}
          favoriteMovies={favoriteMovies}
          handleFavoriteClick={handleFavoriteClick}
        />
      ) : (
        <RowPost
          title='Search'
          movies={movies}
          setMovies={setMovies}
          favoriteMovies={favoriteMovies}
          handleFavoriteClick={handleFavoriteClick}
        />
      )}
    </div>
  );
}

export default HomePage;
