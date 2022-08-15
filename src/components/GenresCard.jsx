import React from 'react'

const GenresCard = (props) => {
  return (


      <div className="total-card bg-light mb-3">
        <div className="total-card-header bg-dark text-white"> {props.name} </div>
        <div className="total-card-body">
          <p className="card-text">{props.id}</p>
        </div>
      </div>
 



  )
}

export default GenresCard