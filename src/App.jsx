
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import Genrespage from './Pages/GenresPage';
import  Navbar  from './Components/NavBar';

function App() {
 
  return <>

<BrowserRouter>
<Navbar/>
<Routes>
  <Route path='/' element={<HomePage/>}/>
  <Route path='/genre' element={<Genrespage/>}/>

   
</Routes>

</BrowserRouter>

    </>
  
}

export default App
