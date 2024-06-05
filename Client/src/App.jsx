import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import Banner from './components/Banner/Banner'
import RowPost from './components/RowPost/RowPost'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <NavBar></NavBar>
    <Banner></Banner>
    <RowPost/>
    </>
  )
}

export default App
