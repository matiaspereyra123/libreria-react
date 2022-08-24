import React from 'react'

export default function LastUserCard(props) {
  return (
    <div className="last-book-card text-white bg-dark mb-3">
    <div className="card-header bg-dark text-uppercase font-weight-bold">ÚLTIMO USUARIO CARGADO</div>
    <div className="card-body">
        <div className="row no-gutters align-items-center">
            <div className="col mr-2">
                
                <img  className="lastUser-card-img-top img-detail mb-3"  src={`https://osias.herokuapp.com/images/users/${props.imagen}`} alt="imagen"/>
                <div className="p mb-2 font-weight-bold text-white-1500">{props.nombre} {props.apellido}</div>
                <div className="p mb-0 font-weight-bold text-white-800">{props.email}</div>
           
            </div>
            <div className="col-auto">
             
            </div>
        </div>
    </div>
    </div>
  )
}
