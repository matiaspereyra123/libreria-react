
import React from 'react'


const SmallCard = (props) => {
    return (

     
        <div className="card text-white bg-dark mb-3">
        <div class="card-header bg-dark text-uppercase font-weight-bold">{props.nombre} {props.apellido}</div>
        <div className="card-body">
            <div className="row no-gutters align-items-center">
                <div className="col mr-2">
                  
                    <img  className="card-img-top img-detail"  src={`http://localhost:3030/images/users/${props.image}`} alt="imagen"/>
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


// /* <div className="col-md-12 mb-4">
//         <div className={props.color}>
//             <div className="card-body">
//                 <div className="row no-gutters align-items-center">
//                     <div className="col mr-2">
//                         <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">{props.titulo}</div>
//                         <div className="h5 mb-0 font-weight-bold text-gray-800">{props.cant}</div>
//                     </div>
//                     <div className="col-auto">
//                         <i className={props.icon}></i>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </div> 



//             // <div className="col-md-12 mb-4">
//             // <div class="card text-white bg-dark mb-3">
//             //     <img src="" alt="" />
//             //         <div class="card-body">
//             //             <h5 class="card-title">{props.nombre} {props.apellido}</h5>
//             //             <p class="card-text">{props.email}</p>
//             //             <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
//             //     </div>
//             // </div>
//             // </div>