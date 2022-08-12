import React, {useEffect, useState } from 'react'
import SmallCard from './SmallCard'
import getUsers from '../helpers/getUsers'

const ContainerCards = () => {
    const [users,setUsers]=useState([])

    useEffect(()=>{
            getUsers()
            .then(users=>setUsers.data)
            
            console.log(setUsers);
    },[])


   /*      {
            color:"card border-left-primary shadow h-100 py-2",
            titulo: "Total Libros",
            cant: 21,
            icon: "fas fa-film fa-2x text-gray-300",
        
          },
          {
            color:"card border-left-success shadow h-100 py-2",
            titulo: "Total Usuarios",
            cant: 59,
            icon: "fas fa-award fa-2x text-gray-300",
          },
          {
            color:"card border-left-warning shadow h-100 py-2",
            titulo: "Total Categorias",
            cant: 49,
            icon: "fas fa-user fa-2x text-gray-300",
          },
       ]); */
   

    return(
        <div>
    <div className="row">
        {users.map((card,i)=>{

            return(
            
               <SmallCard key={card+i}color={card.color} titulo={card.titulo} cant={card.cant} icon={card.icon}/>
            )
        })}
    </div>
        </div>

    )
}

export default ContainerCards