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
<<<<<<< HEAD
        <div>
    <div className="row">                    
=======
   
    <div className="container-total-cards">                    
>>>>>>> 8e0c28355d7dd844fdfcbb90cf6b690494caca90
        
       
                
               <TotalCard table={products.table} total={products.total}  />
          
       
    </div>
<<<<<<< HEAD
        </div>
=======
      
>>>>>>> 8e0c28355d7dd844fdfcbb90cf6b690494caca90
    )
    }
export default ContainerTotalProductsCards