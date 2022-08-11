import React from 'react'
import AppRouter from '../routes/AppRouter'
import ContentWrapper from './ContentWrapper'
import SideBar from './SideBar'


function LibrosApp() {
  return (  
  
  <div id="wrapper">  
     <SideBar/>
     <AppRouter/>  
      <ContentWrapper/>
   </div>
  )

  
  
}

export default LibrosApp