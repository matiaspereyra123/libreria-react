import React from 'react'

import AppRouter from '../routes/AppRouter'
import ContentWrapper from './ContentWrapper'
import SideBar from './SideBar'
import '../App.css';
import '../index.css'

function LibrosApp() {
  return (  
  
  <div id="wrapper">  
  

     <SideBar/>
     <AppRouter/>  
      
   {/*    <ContentWrapper/> */}

     
 
 
    <hr/>
   </div>
  )

  
  
}

export default LibrosApp