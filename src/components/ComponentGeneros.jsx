import axios from 'axios'
import React, { useEffect, useState } from 'react'
import LibrosPorGeneroCard from './LibrosPorGeneroCard'


const ComponentGeneros = () => {
  
    const [genres, setGenres] = useState([])

  
      useEffect(() => {
          axios.get("http://localhost:3030/api/genres/")
              .then(res => {

                  setGenres(res.data.generos)  
                   console.log(res.data.generos); 
      
              })
              .then()
              .catch(error => {
                  console.log(error)
              })
      }, [])



      return (
       
            <div className="cards-container">
               {genres.map((product, i) => {
                  return (
                    <LibrosPorGeneroCard key={product + i} nombre={product.name} libros={product.libros.length} />
                    
                  )
           
                })

                } 

            </div>
    
    ) 
}

export default ComponentGeneros