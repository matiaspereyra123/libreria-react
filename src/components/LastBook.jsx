import axios from 'axios'
import React, { useEffect, useState } from 'react'
import LastBookCard from './LastBookCard'



const LastBook = () => {
   
 const [products, setProducts] = useState()
  const [ultimoLibro, setUltimoLibro]=useState() 

    useEffect(() => {
        axios.get("https://osiaslibros.onrender.com/api/products/")
            .then(res => {
             
               /*  console.log(res.data);  */
                setProducts(res.data.libros)
                setUltimoLibro(res.data.libros.pop());
            })
            .catch(error => {
                console.log(error)
            })
    }, [])





 return (
  
        <div className="last-card-container">
            {products ?
            (<LastBookCard  titulo={ultimoLibro.title} autor={ultimoLibro.author} ilustrador={ultimoLibro.illustrator} precio={ultimoLibro.price} imagen={ultimoLibro.image} /> 
            
            ):
            (
                "Cargando..."
                 )
            }
         
         
        </div>

) 
}

export default LastBook