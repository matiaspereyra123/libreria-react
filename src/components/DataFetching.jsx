import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

function DataFetching() {

    const [users, setUsers] = useState([])

    useEffect(()=> {
        axios.get("http://localhost:3030/api/users/")
        .then(res => {
            console.log(res);
            setUsers(res.data)
        })
        .catch(error => {
            console.log(error)
        })
       
    }, [])

    

    return (
        <div>
            <ul>
                {
                    users.map(user => <li key={user.id}>{user.first_name}</li> )
                }
            </ul>
        </div>
        
    )
}

export default DataFetching
