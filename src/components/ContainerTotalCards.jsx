import axios from 'axios'
import React, { useEffect, useState } from 'react'
import TotalCard from './TotalCard'

const ContainerTotalCards = () => {

    const [users, setUsers] = useState([])

    useEffect(()=> {
        axios.get("http://localhost:3030/api/users/")
        .then(res => {
        /*   console.log("datos"); */
            console.log(res.data);
            setUsers(res.data.meta)
        })
        .catch(error => {
            console.log(error)
        })  
    },[])

    console.log(users);

    return(
<<<<<<< HEAD
        <div>
    <div className="row">                    
=======
       
    <div className="container-total-cards">                    
>>>>>>> 8e0c28355d7dd844fdfcbb90cf6b690494caca90
        
       
                
               <TotalCard table={users.table} total={users.total}  />
          
       
    </div>
<<<<<<< HEAD
        </div>
=======
         
>>>>>>> 8e0c28355d7dd844fdfcbb90cf6b690494caca90
    )
    }

export default ContainerTotalCards