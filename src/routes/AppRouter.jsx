import React from 'react'
import {Routes, Route} from 'react-router-dom';
import HomePage from '../pages/HomePage';
import LibrosPage from '../pages/LibrosPage';
 import UsersPage from '../pages/UsersPage'


const AppRouter = () => {
  return (
    <Routes>
           <Route path="/" element={<HomePage/>}/>
        <Route path="/inicio" element={<HomePage/>}/>
        <Route path="/libros" element={<LibrosPage/>}/>
         <Route path="/usuarios" element={<UsersPage/>}/> 
    </Routes>
  )
}

export default AppRouter