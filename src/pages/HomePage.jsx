import React from 'react'
import ContainerTotalCards from '../components/ContainerTotalCards'
import ContainerTotalGenresCards from '../components/ContainerTotalGenresCards'
import ContainerTotalProductsCards from '../components/ContainerTotalProductsCards'
import ComponentGeneros from '../components/ComponentGeneros'
import LastBook from '../components/LastBook'
import LastUser from '../components/LastUser'


const HomePage = () => {
  return (
    <div className='main-home-container'>
      <div className='upper-container'>

        <ContainerTotalCards />
        <ContainerTotalProductsCards />
        <ContainerTotalGenresCards />

      </div>

      <div className='middle-container'>

        <LastBook />
        <LastUser/>
       
      </div>

      <div className='lower-container'>
      <ComponentGeneros/>
      </div>

    </div>

  )
}

export default HomePage