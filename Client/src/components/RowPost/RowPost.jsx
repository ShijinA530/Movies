import React, { useEffect, useState } from 'react';
import axios from '../../axios';

function RowPost({
  title,
  movies,
  setMovies
}) {
  // const [movies, setMovies] = useState([]);

  useEffect(() => {
    console.log(movies);
    if(movies.length == 0){
      axios.get("")
      .then((response) => {
        setMovies(response.data);
      })
      .catch((error) => {
        console.error("Error fetching the movie data:", error);
      });
    }
    
  }, []);

  return (
    <div className='pl-20 pr-10 bg-gray-100'>
      <h2 className='pt-12 text-lg font-bold'>{title}</h2>
      <div className='pt-5 pb- flex flex-wrap justify-between'>
        {movies.map((obj, index) => (
          <div key={index} className='h-[500px] mr-10 mb-10 w-[20%]'>
            <img className='cursor-pointer hover:scale-[1.05] rounded-lg h-[400px] w-full' src={obj.banner_image} alt="" />
            <h4 className='pt-3 text-gray-400'>{obj.year}</h4>
            <h2 className='text-base font-bold'>{obj.title}</h2>
            <h4 className='text-gray-400'>{obj.genre}</h4>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RowPost;
