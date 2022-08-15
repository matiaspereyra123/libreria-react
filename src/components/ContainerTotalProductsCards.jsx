import axios from 'axios'
import React, { useEffect, useState } from 'react'
import TotalCard from './TotalCard'

const ContainerTotalProductsCards = () => {
    const [products, setProducts] = useState([])

    useEffect(()=> {
        axios.get("http://localhost:3030/api/products/")
        .then(res => {
        /*   console.log("datos"); */
            console.log(res.data);
            setProducts(res.data)
        })
        .catch(error => {
            console.log(error)
        })  
    },[])

  

    return(

        <div>
                <div className="row">                    

            
                <div className="container-total-cards">                    

        
       
                
               <TotalCard table={products.table} total={products.total}  />
          
       
    </div>

        </div>

        </div>

      

    )
    }
export default ContainerTotalProductsCards