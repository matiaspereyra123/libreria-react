import axios from 'axios'
import React, { useEffect, useState } from 'react'
import GenresCard from './GenresCard'
import SmallCardProduct from './SmallCardProduct'

const LibrosPorGeneros = () => {
    const [genres, setGenres] = useState([])
 const [products, setProducts] = useState([])
    useEffect(() => {
        axios.get("http://localhost:3030/api/genres/")
            .then(res => {
                /*   console.log("datos"); */
                console.log(res.data);
                console.log("datos:")
                setGenres(res.data.generos)
            })
            .catch(error => {
                console.log(error)
            })
    }, [])

    console.log(genres);

    useEffect(() => {
        axios.get("http://localhost:3030/api/products/")
            .then(res => {
                /*   console.log("datos"); */
                console.log(res.data);
                setProducts(res.data.libros)
            })
            .catch(error => {
                console.log(error)
            })
    }, [])


let ultimo =products.pop();
console.log("ultimo: ")
console.log(ultimo);

return (
    <div>
        <div className="cards-container">
         
              <SmallCardProduct  titulo={ultimo.title} autor={ultimo.author} ilustrador={ultimo.illustrator} precio={ultimo.price} imagen={ultimo.image} />
            

            

        </div>
    </div>
)
}

export default LibrosPorGeneros