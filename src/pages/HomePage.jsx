import React from 'react'
import ComponentGeneros from '../components/ComponentGeneros'
import ContainerTotalCards from '../components/ContainerTotalCards'
import ContainerTotalGenresCards from '../components/ContainerTotalGenresCards'
import ContainerTotalProductsCards from '../components/ContainerTotalProductsCards'
import LibrosPorGeneros from '../components/LibrosPorGeneros'


const HomePage = () => {
  return (
    <div className='main-home-container'>
    
      <ContainerTotalCards/>
      <ContainerTotalProductsCards/>
      <ContainerTotalGenresCards/>
      <LibrosPorGeneros/>
      <ComponentGeneros/>
   </div>
   
  )
}

export default HomePage