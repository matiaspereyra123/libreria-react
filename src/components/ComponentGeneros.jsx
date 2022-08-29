
/* import axios from 'axios' */

import React, { useEffect, useState } from 'react'


import LibrosPorGeneroCard from './LibrosPorGeneroCard'



const ComponentGeneros = () => {
  
    const [genres, setGenres] = useState([])

    useEffect(() => {

      async function getReq(){
        const api = await fetch ('https://osiaslibros.onrender.com/api/genres/');
        const genresApi = await api.json();
        if(genresApi){
          setGenres(genresApi.generos);       
        }
      }
      getReq();
  }, []) 




          return (
       
          <div className="cards-container">

               {genres.map((product, i) => (
         
                    <LibrosPorGeneroCard key={product + i} nombre={product.name} libros={product.libros.length} />
                    
                ))} 

            </div> 
    
    )  
}

export default ComponentGeneros