import React from 'react';

const LibrosPorGeneroCard = (props) => {
    return (
        
            <div className="card">
<<<<<<< HEAD
                {/* <img className="card-img-top" src={`/assets/images/${props.image}`} /> */}
                <div className="genre-card-header bg-dark text-uppercase text-white font-weight-bold">{props.nombre}</div>
=======

               <img className="card-img-top" src="/miniOsiasLogo.png" /> 

                {/* <img className="card-img-top" src={`/assets/images/${props.image}`} /> */}
                <div className="genre-card-header bg-dark text-uppercase text-white font-weight-bold">{props.nombre}</div>

>>>>>>> 5e7e8d44867fb619436f0cc86332a2595dc3b57f
                    <div className="card-body">
                        {/* <h5 className="card-title">{props.nombre}</h5> */}
                        <p className="genre-card-text">{props.libros}</p>
              
                    </div>
            </div>
       
    );
}

export default LibrosPorGeneroCard;
