import React from 'react'
import SmallCard from './ContainerCards'

const ContentWrapper = () => {
  return (
    <>
        <div id="content-wrapper" className="d-flex flex-column">
        {/*<!-- Main Content -->*/}
        <div id="content">
            <SmallCard/>
        </div>
    </div>   
    </>


  )
}

export default ContentWrapper