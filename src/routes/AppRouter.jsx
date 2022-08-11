import React from 'react'
import {Routes, Route} from 'react-router-dom';
import HomePage from '../pages/HomePage';
import LibrosPage from '../pages/LibrosPage';


const AppRouter = () => {
  return (
    <Routes>
           <Route path="/" element={<HomePage/>}/>
        <Route path="/home" element={<HomePage/>}/>
        <Route path="/libros" element={<LibrosPage/>}/>
    </Routes>
  )
}

export default AppRouter