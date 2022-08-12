  import React, { useEffect, useState } from 'react'
import SmallCard from './SmallCard'

import axios from 'axios'
import TotalCard from './TotalCard'

const ContainerCards = () => {
  const [users, setUsers] = useState([])

  useEffect(()=> {
      axios.get("http://localhost:3030/api/users/")
      .then(res => {
      /*   console.log("datos"); */
          console.log(res.data);
          setUsers(res.data.users)
    
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
            
           <SmallCard key={card+i} nombre={card.first_name} apellido={card.last_name} image={card.image} email={card.email} />
        )
    })}
</div>
    </div>

)
}

export default ContainerCards  