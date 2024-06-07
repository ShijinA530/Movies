import React, { useState } from 'react';
import logo from '../../assets/icon.jpg';
import axios from '../../axios';
import { useNavigate } from 'react-router-dom';

function NavBar({
  setTitle,
  setSearchRes
}) {

  const searchHandle = (e) => {
    const newTitle = e.target.value;
    setTitle(newTitle);
    console.log(newTitle);
    axios.get(`${import.meta.env.VITE_SERVER_URI}/search?title=${newTitle}`).then(res=>{
      setSearchRes(res.data);
      console.log(res.data)
    });
  };

  const navigate = useNavigate();

  return (  
    <div className="pl-10 h-20 flex justify-between">
      <div className="flex items-center">
        <div onClick={() => navigate("/")} className='flex items-center hover:cursor-pointer'>
          <img className="h-8 m-1" src={logo} alt="logo" />
          <h5 className="font-medium ml-1">GET MOVIES</h5>
        </div>
        
        <form className="max-w-md flex ml-5">
          <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
          <div className="relative w-full">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
              </svg>
            </div>
            <input 
              onChange={searchHandle} 
              type="search" 
              id="default-search" 
              className="block h-10 w-96 p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50" 
              placeholder="Search movies and series" 
              required 
            />
          </div>
        </form>
      </div>
      <button onClick={() => navigate("/favourites")} type="button" className="mt-5 mr-10 h-10 text-white font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-rose-500 dark:hover:bg-rose-600 focus:outline-none dark:focus:ring-blue-800">My favourites</button>
    </div>
  );
}

export default NavBar;
