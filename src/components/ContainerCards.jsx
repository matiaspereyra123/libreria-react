import React, { useEffect, useState } from 'react'
import SmallCard from './SmallCard'

/* import axios from 'axios' */


const ContainerCards = () => {
    const [users, setUsers] = useState([])


 
    useEffect(() => {

        async function getReq(){
          const api = await fetch ('http://localhost:3030/api/users/');
          const usersApi = await api.json();
          if(usersApi){
            setUsers(usersApi.users);       
          }
        }
        getReq();
    }, []) 


<<<<<<< HEAD
=======





>>>>>>> 5e7e8d44867fb619436f0cc86332a2595dc3b57f
/* 
    useEffect(() => {
        axios.get("http://localhost:3030/api/users/")
            .then(res => {
             //     console.log("datos"); 
             //   console.log(res.data); 
                setUsers(res.data.users)
            })
            .catch(error => {
                console.log(error)
            })
    }, []) */


<<<<<<< HEAD
=======



>>>>>>> 5e7e8d44867fb619436f0cc86332a2595dc3b57f
    return (
        <div>
            <div className="cards-container">
                {users.map((card, i) => (
                  
                        <SmallCard key={card + i} nombre={card.first_name} apellido={card.last_name} image={card.image} email={card.email} id={card.id} />
                    
                ))}

            </div>
        </div>
    )
}

export default ContainerCards  