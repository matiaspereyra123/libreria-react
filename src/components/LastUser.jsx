import axios from 'axios'
import React, { useEffect, useState } from 'react'
import LastUserCard from './LastUserCard'




const LastUser = () => {
   
 const [users, setUsers] = useState()
  const [ultimoUsuario, setUltimoUsuario]=useState() 

    useEffect(() => {
        axios.get("http://localhost:3030/api/users/")
            .then(res => {
             
               /*  console.log(res.data);  */
                setUsers(res.data.users)
                setUltimoUsuario(res.data.users.pop());
            })
            .catch(error => {
                console.log(error)
            })
    }, [])





 return (
  
        <div className="last-card-container">
            {users ?
            (<LastUserCard nombre={ultimoUsuario.first_name} autor={ultimoUsuario.last_name} email={ultimoUsuario.email} imagen={ultimoUsuario.image}/> 
            
            ):
            (
                "Cargando..."
                 )
            }
         
         
        </div>

) 
}

export default LastUser