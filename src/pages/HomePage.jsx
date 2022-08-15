import React from 'react'
import ContainerTotalCards from '../components/ContainerTotalCards'
import ContainerTotalProductsCards from '../components/ContainerTotalProductsCards'


const HomePage = () => {
  return (
    <div className='main-home-container'>
      <ContainerTotalCards/>
      <ContainerTotalProductsCards/>
   </div>
  )
}

export default HomePage