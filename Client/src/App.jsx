import { useState } from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Banner from './components/Banner/Banner';
import RowPost from './components/RowPost/RowPost';


function App() {
  const [searchRes,setSearchRes] = useState([])
  const [title,setTitle] = useState("")
  return (
    <div>
      <NavBar title ={title} setTitle={setTitle}  searchRes={searchRes} setSearchRes={setSearchRes}/>
      { title.length == 0 && <Banner/> }
      
      {title.length == 0 
        ? 
        <RowPost title='Movies' movies={searchRes} setMovies={setSearchRes}/>
        :
        <RowPost title='Search' movies={searchRes} setMovies={setSearchRes}/>
      }
      
    </div>
      
  );
}

export default App;
