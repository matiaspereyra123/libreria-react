import React from 'react'
import ContainerTotalCards from '../components/ContainerTotalCards'
import ContainerTotalGenresCards from '../components/ContainerTotalGenresCards'
import ContainerTotalProductsCards from '../components/ContainerTotalProductsCards'
import LastBook from '../components/LastBook'


const HomePage = () => {
  return (
    <div className='main-home-container'>
      <div className='upper-container'>

        <ContainerTotalCards />
        <ContainerTotalProductsCards />
        <ContainerTotalGenresCards />

      </div>

      <div className='lower-container'>

        <LastBook />

      </div>
    </div>

  )
}

export default HomePage