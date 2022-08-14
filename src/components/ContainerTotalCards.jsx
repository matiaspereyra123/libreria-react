import React, { useEffect, useState } from 'react'


import axios from 'axios'
import TotalCard from './TotalCard'

const ContainerTotalCards = () => {
  const [users, setUsers] = useState([])

  useEffect(()=> {
      axios.get("http://localhost:3030/api/users/")
      .then(res => {
      /*   console.log("datos"); */
          console.log(res.data);
          setUsers(res.data.users.lenght)
    
      })
      .catch(error => {
          console.log(error)
      })
     
  },[])
     
  return(
    <div>
<div className="row">
                                       
    {users.map((card,i)=>{

        return(
            
           <TotalCard key={card+i} nombre={card.first_name} apellido={card.last_name} id={card.id}/>
        )
    })}
</div>
    </div>

)
}

export default ContainerTotalCards  