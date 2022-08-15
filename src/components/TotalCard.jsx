import React from 'react'

const TotalCard = (props) => {
  return (


      <div class="total-card bg-light mb-3">
        <div class="total-card-header bg-dark text-white">Total de {props.table} registrados</div>
        <div class="total-card-body">
          <p class="card-text">{props.total}</p>
        </div>
      </div>
 



  )
}

export default TotalCard