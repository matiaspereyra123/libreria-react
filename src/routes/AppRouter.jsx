import React from 'react'
import {Routes, Route} from 'react-router-dom';
import HomePage from '../pages/HomePage';
import UserPage from '../pages/UserPage';


const AppRouter = () => {
  return (
    <Routes>
           <Route path="/" element={<HomePage/>}/>
        <Route path="/home" element={<HomePage/>}/>
        <Route path="/user" element={<UserPage/>}/>
    </Routes>
  )
}

export default AppRouter