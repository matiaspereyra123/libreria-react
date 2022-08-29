import axios from 'axios'
import React, { useEffect, useState } from 'react'
import TotalCard from './TotalCard'

const ContainerTotalCards = () => {

    const [users, setUsers] = useState([])


    useEffect(() => {

        async function getReq(){
          const api = await fetch ('https://osiaslibros.onrender.com/api/users/');
          const usersApi = await api.json();
          if(usersApi){
            setUsers(usersApi.meta);       
          }
        }
        getReq();
    }, []) 

/*     useEffect(()=> {
        axios.get("http://localhost:3030/api/users/")
        .then(res => {
        // console.log("datos"); 
          //  console.log(res.data); 
            setUsers(res.data.meta)
        })
        .catch(error => {
            console.log(error)
        })  
    },[]) */

    

    return(
       
    <div className="container-total-cards">                    
        
       
                
               <TotalCard table={users.table} total={users.total}  />
          
       
    </div>
       
    )
    }

export default ContainerTotalCards