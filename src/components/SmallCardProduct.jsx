import React from 'react'

export default function SmallCardProduct(props) {
  return (
    <div className="card text-white bg-dark mb-3">
    <div class="card-header bg-dark text-uppercase font-weight-bold">{props.titulo}</div>
    <div className="card-body">
        <div className="row no-gutters align-items-center">
            <div className="col mr-2">
                <img  className="card-img-top img-detail mb-3"  src={`http://localhost:3030/images/products/${props.imagen}`} alt="imagen"/>
                <div className="p mb-0 font-weight-bold text-white-800">{props.autor}</div>
                <div className="p mb-0 font-weight-bold text-white-800">Ilustr.:{props.ilustrador}</div>
                <div className="p mb-0 font-weight-bold text-white-800">${props.precio}</div>
           
            </div>
            <div className="col-auto">
             
            </div>
        </div>
    </div>
    </div>
  )
}
