import React from 'react';

const LibrosPorGeneroCard = (props) => {
    return (
        
            <div className="card">
                {/* <img className="card-img-top" src={`/assets/images/${props.image}`} /> */}
                <div className="genre-card-header bg-dark text-uppercase text-white font-weight-bold">{props.nombre}</div>
                    <div className="card-body">
                        {/* <h5 className="card-title">{props.nombre}</h5> */}
                        <p className="genre-card-text">{props.libros}</p>
              
                    </div>
            </div>
       
    );
}

export default LibrosPorGeneroCard;
