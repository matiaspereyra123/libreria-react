import React from 'react'


const SmallCard = (props) => {
/*     let image=`../assets/images/${props.image}`; */
    return (

    

     
        <div className="card text-white bg-dark mb-3">
        <div className="card-header bg-dark text-uppercase font-weight-bold">{props.nombre} {props.apellido}</div>
        <div className="card-body">
            <div className="row no-gutters align-items-center">
                <div className="col mr-2">
                  
                    <img  className="card-img-top img-detail"  src={`https://osias.herokuapp.com/images/users/${props.image}`} alt="imagen"/>
                    <div className="p mb-0 font-weight-bold text-white-800">{props.email}</div>
               
                </div>
                <div className="col-auto">

                </div>
            </div>
        </div>
        </div>



    )
}

export default SmallCard





