import React from 'react'
import SmallCard from './ContainerCards'
import DataFetching from './DataFetching'

const ContentWrapper = () => {
  return (
    <>
        <div id="content-wrapper" className="d-flex flex-column">
        {/*<!-- Main Content -->*/}
        <div id="content">
          <DataFetching/>
          
            <SmallCard/>
        </div>
    </div>   
    </>


  )
}

export default ContentWrapper