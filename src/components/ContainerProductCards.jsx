import React from 'react'
import  { useEffect, useState } from 'react'


import axios from 'axios'

import SmallCardProduct from './SmallCardProduct'


export default function ContainerProductCards() {

    const [products, setProducts] = useState([])

    useEffect(() => {
        axios.get("http://localhost:3030/api/products/")
            .then(res => {
                /*   console.log("datos"); */
               /*  console.log(res.data); */
                setProducts(res.data.libros)
            })
            .catch(error => {
                console.log(error)
            })
    }, [])

    return (
        <div>
            <div className="cards-container">
                {products.map((product, i) => {
                  return  <SmallCardProduct key={product + i} titulo={product.title} autor={product.author} ilustrador={product.illustrator} precio={product.price} imagen={product.image} />
                })

                }

            </div>
        </div>
    )
}

