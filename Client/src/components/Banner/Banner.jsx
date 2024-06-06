import React, { useEffect, useState } from 'react';
import axios from '../../axios';

function Banner() {
  const [movie, setMovie] = useState({}); // Set default value as an empty object

  useEffect(() => {
    axios.get("").then((response) => {
        setMovie(response.data[Math.floor(Math.random()*139)]);
      })
      .catch((error) => {
        console.error("Error fetching the movie data:", error);
      });
  }, []);

  return (
    <div className='flex justify-center bg-gray-100 pt-8'>
      <div 
        className="bg-black pl-11 pt-64 h-[600px] w-[90%] rounded-lg text-white" 
        style={{ 
          backgroundImage: `url(${movie.banner_image})`, // Handle missing banner_image
          backgroundSize: 'auto 100%',
          backgroundPosition: 'center',
          backgroundRepeat:'no-repeat'
        }}
      >
        <h1 className='font-extrabold text-5xl'>{movie ? movie.title : ''}</h1> {/* Handle missing title */}
        <h1 className='w-[700px] py-5 text-base max-w-[360px]'>
          lkfjks;ljlcdbhvejhfvkejhflkbeflkefbwl,bjjjjk;l';,,.,///.kndcjbcjhdvjhksd //naxbcjyfdyuehv fcnbsmzvcdvhcgbkdbgsc,alklfdh
        </h1>
        <div className="">
          <button type="button" className="h-11 pr-5 flex items-center text-black font-medium rounded-lg text-sm border dark:bg-white dark:focus:ring-blue-800 hover:text-red-500">
            <img className="ml-2 h-8" src="https://i.fbcd.co/products/resized/resized-750-500/e2d58bd824dd0b3b9786845286c4f998bb01f7b012ec47d2bd6e99e7bac56405.jpg" alt="Play Icon" />
            Watch trailer
          </button>
        </div>
      </div>
    </div>
  );
}

export default Banner;
