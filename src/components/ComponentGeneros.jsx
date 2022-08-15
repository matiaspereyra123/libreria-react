import axios from 'axios'
import React, { useEffect, useState } from 'react'

const ComponentGeneros = () => {
    const [users, setUsers] = useState([])
    const [products, setProducts] = useState()
/*     const [ultimoLibro, setUltimoLibro]=useState()  */
  
      useEffect(() => {
          axios.get("http://localhost:3030/api/products/")
              .then(res => {
               
                  console.log(res.data); 
                  setProducts(res.data.libros)
        /*           setUltimoLibro(res.data.libros.pop()); */
              })
              .catch(error => {
                  console.log(error)
              })
      }, [])


      useEffect(() => {
          axios.get("http://localhost:3030/api/users/")
              .then(res => {
                  /*   console.log("datos"); */
                  console.log(res.data);
                  setUsers(res.data.users)
              })
              .catch(error => {
                  console.log(error)
              })
      }, [])


  return (
        <p>asda</p>
  )
}

export default ComponentGeneros