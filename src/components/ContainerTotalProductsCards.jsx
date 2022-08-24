/* import axios from 'axios' */
import React, { useEffect, useState } from 'react'
import TotalCard from './TotalCard'

const ContainerTotalProductsCards = () => {
    const [products, setProducts] = useState([])



    useEffect(() => {

        async function getReq(){
          const api = await fetch ('https://osias.herokuapp.com/api/products/');
          const productsApi = await api.json();
          if(productsApi){
     
        setProducts(productsApi);  
          }
        }
        getReq();
    }, []) 




/* 
    useEffect(() => {
        axios.get("http://localhost:3030/api/products/")
            .then(res => {
     
                setProducts(res.data)
            })
            .catch(error => {
                console.log(error)
            })
    }, [])
 */


    return (





        <div className="container-total-cards">




            <TotalCard table={products.table} total={products.total} />
            


        </div>







    )
}
export default ContainerTotalProductsCards