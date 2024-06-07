import React from 'react';

function FavouritePage({ movies, favoriteMovies, handleFavoriteClick }) {
  const favoriteMoviesList = movies.filter((movie) => favoriteMovies.includes(movie.id));

  return (
    <div className='pl-20 pr-10 bg-gray-100 min-h-screen'>
      <h2 className='pt-10 pb-7 text-xl font-bold'>My Favourites</h2>
      <div className='pt-5 pb-10 flex flex-wrap justify-start'>
        {favoriteMoviesList.length === 0 ? (
          <h1 className='text-xl'>No items in favourites</h1>
        ) : (
          favoriteMoviesList.map((obj, index) => (
            <div key={index} className='relative h-[500px] mb-10 w-[20%] mx-[2%]'>
              <img
                className='cursor-pointer hover:scale-[1.05] rounded-xl h-[400px] w-full object-cover'
                src={obj.banner_image}
                alt={obj.title}
              />
              <button
                onClick={() => handleFavoriteClick(obj)}
                type="button"
                className="absolute top-2 right-2 text-white bg-rose-500 hover:bg-rose-600 focus:ring-2 focus:ring-rose-600 font-medium rounded-full text-sm p-2.5 dark:bg-rose-500 dark:hover:bg-rose-600"
              >
                {favoriteMovies.includes(obj.id) ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M4 10c0-.552.447-1 1-1h10c.553 0 1 .448 1 1s-.447 1-1 1H5c-.553 0-1-.448-1-1z" clipRule="evenodd" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a1 1 0 01-1-1V11H4a1 1 0 110-2h5V3a1 1 0 112 0v6h5a1 1 0 110 2h-5v6a1 1 0 01-1 1z" clipRule="evenodd" />
                  </svg>
                )}
              </button>
              <h4 className='pt-3 text-gray-400'>{obj.year}</h4>
              <h2 className='text-base font-bold'>{obj.title}</h2>
              <h4 className='text-gray-400'>{obj.genre}</h4>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default FavouritePage;
