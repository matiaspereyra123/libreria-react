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
        <div>
    <div className="row">                    
        
       
                
               <TotalCard table={users.table} total={users.total}  />
          
       
    </div>
        </div>
    )
    }

export default ContainerTotalCards