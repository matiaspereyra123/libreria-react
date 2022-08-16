import axios from 'axios'
import React, { useEffect, useState } from 'react'


const ComponentGeneros = () => {
  
    const [genres, setGenres] = useState([])
/*     const [ultimoLibro, setUltimoLibro]=useState()  */
  
      useEffect(() => {
          axios.get("http://localhost:3030/api/genres/")
              .then(res => {

                  setGenres(res.data.generos)  
                   console.log(res.data.generos); 
        /*           setUltimoLibro(res.data.libros.pop()); */
              })
              .then()
              .catch(error => {
                  console.log(error)
              })
      }, [])



      return (
        <div>
            <div className="cards-container">
               {genres.map((product, i) => {
                  return  <p  key={product + i}> {product.name} {product.libros.length}</p> 
                })

                } 

            </div>
        </div> 
    ) 
}

export default ComponentGeneros