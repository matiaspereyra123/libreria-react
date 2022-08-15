import axios from 'axios'
import React, { useEffect, useState } from 'react'

import SmallCardProduct from './SmallCardProduct'

const LibrosPorGeneros = () => {
   
 const [products, setProducts] = useState()
  const [ultimoLibro, setUltimoLibro]=useState() 

    useEffect(() => {
        axios.get("http://localhost:3030/api/products/")
            .then(res => {
             
                console.log(res.data); 
                setProducts(res.data.libros)
                setUltimoLibro(res.data.libros.pop());
            })
            .catch(error => {
                console.log(error)
            })
    }, [])





 return (
    <div>
        <div className="">
            {products ?
            (<SmallCardProduct  titulo={ultimoLibro.title} autor={ultimoLibro.author} ilustrador={ultimoLibro.illustrator} precio={ultimoLibro.price} imagen={ultimoLibro.image} /> 
            
            ):
            (
                "No hay libros"
                 )
            }
         
         
        </div>
    </div>
) 
}

export default LibrosPorGeneros