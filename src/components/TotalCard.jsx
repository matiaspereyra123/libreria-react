import React from 'react'

const TotalCard = (props) => {
  return (


      <div className="total-card bg-light mb-3">
        <div className="total-card-header bg-dark text-white">Total de {props.table} registrados</div>
        <div className="total-card-body">
          <p className="card-text">{props.total}</p>
        </div>
      </div>
 



  )
}

export default TotalCard