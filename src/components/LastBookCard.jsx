import React from 'react'

export default function LastBookCard(props) {
  return (
    <div className="last-book-card text-white bg-dark mb-3">
    <div className="card-header bg-dark text-uppercase font-weight-bold">ÚLTIMO LIBRO CARGADO</div>
    <div className="card-body">
        <div className="row no-gutters align-items-center">
            <div className="col mr-2">
                
                <img  className="card-img-top img-detail mb-3"  src={`https://osias.herokuapp.com/images/products/${props.imagen}`} alt="imagen"/>
                <div className="p mb-2 font-weight-bold text-white-1500">{props.titulo}</div>
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
