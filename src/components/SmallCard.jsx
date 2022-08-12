
import React from 'react'

const SmallCard = (props) => {
    return (
        <div className="col-md-12 mb-4">
            <div className="card border-left-primary shadow h-100 py-2">
            <div className="card-body">
                <div className="row no-gutters align-items-center">
                    <div className="col mr-2">
                        <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">{props.nombre}</div>
                        <div className="h5 mb-0 font-weight-bold text-gray-800">{props.apellido}</div>
                        <div className="h5 mb-0 font-weight-bold text-gray-800">{props.id}</div>
          
                    </div>
                    <div className="col-auto">
                     
                    </div>
                </div>
            </div>
            </div>
        </div>
    
      )
}

export default SmallCard 


/* 
<div className="col-md-12 mb-4">
        <div className={props.color}>
            <div className="card-body">
                <div className="row no-gutters align-items-center">
                    <div className="col mr-2">
                        <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">{props.titulo}</div>
                        <div className="h5 mb-0 font-weight-bold text-gray-800">{props.cant}</div>
                    </div>
                    <div className="col-auto">
                        <i className={props.icon}></i>
                    </div>
                </div>
            </div>
        </div>
    </div> */