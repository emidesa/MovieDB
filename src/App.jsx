
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import Genrespage from './Pages/GenresPage';
import  Navbar  from './Components/NavBar';
import MovieDetailsPage from './Pages/MovieDetailsPage';
import GenreDetails from './Pages/genreDetails';
import PeoplePage from './Pages/PeoplePage';
import PeopleDetailsPage from './Pages/PeopleDetailsPage';

function App() {
 
  return <>

<BrowserRouter>
<Navbar/>
<Routes>
  <Route path='/' element={<HomePage/>}/>
  <Route path='/genre' element={<Genrespage/>}/>
  <Route path='/people' element={<PeoplePage/>}/>
  <Route path='/movie/:id' element={<MovieDetailsPage/>}/>
  <Route path='/genre/:id' element={<GenreDetails/>}/>
  <Route path='/people/:id' element={<PeopleDetailsPage/>}/>
</Routes>

</BrowserRouter>
</>
  
}

export default App
