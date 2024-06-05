import React from 'react';

function Banner() {
  return (
    <div className='flex justify-center bg-gray-100 pt-8'>
      <div 
        className="pl-11 pt-64 h-[600px] w-[95%] rounded-lg text-white" 
        style={{ 
          backgroundImage: `url('https://wallpapers.com/images/featured/spiderman-p4ashmgeamn2mvkn.jpg')`, 
          backgroundSize: 'cover' 
        }}
      >
        <h1 className='font-extrabold text-5xl'>spiderman</h1>
        <h1 className='w-[700px] py-5 text-base max-w-[360px]'>lkjfks;ljlcdbhvejhfvkejhflkbeflkefbwl,bjjjjk;l';,,.,///.kndcjbcjhdvjhksd //naxbcjyfdyuehv fcnbsmzvcdvhcgbkdbgsc,alklfdh</h1>
        <div className="">
          <button type="button" className="h-11 pr-5 flex items-center text-black font-medium rounded-lg text-sm border dark:bg-white dark:focus:ring-blue-800">
            <img className="ml-2 h-8" src="https://i.fbcd.co/products/resized/resized-750-500/e2d58bd824dd0b3b9786845286c4f998bb01f7b012ec47d2bd6e99e7bac56405.jpg" alt="Play Icon" />
            Watch trailer
          </button>
        </div>
      </div>
    </div>
  );
}

export default Banner;
