import axios from 'axios'
import React, { useEffect, useState } from 'react'
import TotalCard from './TotalCard'

const ContainerTotalGenresCards = () => {
    const [genres, setGenres] = useState([])


    useEffect(() => {

        async function getReq(){
          const api = await fetch ('http://localhost:3030/api/genres/');
          const genresApi = await api.json();
          if(genresApi){
            setGenres(genresApi.meta);       
          }
        }
        getReq();
    }, []) 



/*     useEffect(() => {
        axios.get("http://localhost:3030/api/genres/")
            .then(res => {
           
               
                setGenres(res.data.meta)
            })
            .catch(error => {
                console.log(error)
            })
    }, []) */

   


    return (


        <div className="container-total-cards">


            <TotalCard table={genres.table} total={genres.total} />


        </div>


    )
}
export default ContainerTotalGenresCards