import React from 'react'

const TotalCard = (props) => {
  return (
<<<<<<< HEAD
    
  <div>
   {/*  <p>{props.table}</p>
 
    <p>   {props.total}</p>

 */}

<div className="col-md-4  mb-4 ">
            <div className="card border-left-primary shadow h-100 py-2">
            <div className="card-body">
                <div className="row no-gutters align-items-center">
                    <div className="col mr-2">
                        <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">Total de {props.table} Registrados</div>
                        <div className="h5 mb-0 font-weight-bold text-gray-800">{props.total}</div>
                 
                   
                    </div>
                    <div className="col-auto">
                     
                    </div>
                </div>
            </div>
            </div>
        </div>



  </div>


 
  


  )
}

export default TotalCard
=======
>>>>>>> 8e0c28355d7dd844fdfcbb90cf6b690494caca90


      <div class="total-card bg-light mb-3">
        <div class="total-card-header bg-dark text-white">Total de {props.table} registrados</div>
        <div class="total-card-body">
          <p class="card-text">{props.total}</p>
        </div>
      </div>
 



  )
}

export default TotalCard