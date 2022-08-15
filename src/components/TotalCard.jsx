import React from 'react'

const TotalCard = (props) => {
  return (
    
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






/* 
 import React from 'react'

const TotalCard = (props) => {
  return (
    <div className="col-md-4 mb-4">
    <div className="card border-left-primary shadow h-100 py-2">
        <div className="card-body">
            <div className="row no-gutters align-items-center">
                <div className="col mr-2">
                    <div className="text-xs font-weight-bold text text-uppercase mb-1"> </div>
                    <div className="h5 mb-0 font-weight-bold text-gray-800">{props.cant}</div>
                </div>
                <div className="col-auto">
                    <i className=""></i>
                </div>
            </div>
        </div>
    </div>
</div>
        
  )
}

export default TotalCard 
 */
