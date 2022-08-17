import React from 'react';

const LibrosPorGeneroCard = (props) => {
    return (
        <div>
            <div className="card">
               <img className="card-img-top" src="/miniOsiasLogo.png" /> 
                    <div className="card-body">
                        <h5 className="card-title">{props.nombre}</h5>
                        <p className="card-text">{props.libros}</p>
              
                    </div>
            </div>
        </div>
    );
}

export default LibrosPorGeneroCard;
