import React from 'react'
import ContainerTotalCards from '../components/ContainerTotalCards'
import ContainerTotalGenresCards from '../components/ContainerTotalGenresCards'
import ContainerTotalProductsCards from '../components/ContainerTotalProductsCards'


const HomePage = () => {
  return (
    <div className='main-home-container'>
    
      <ContainerTotalCards/>
      <ContainerTotalProductsCards/>
      <ContainerTotalGenresCards/>
   
   </div>
   
  )
}

export default HomePage