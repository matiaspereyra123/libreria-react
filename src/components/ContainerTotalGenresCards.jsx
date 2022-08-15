import axios from 'axios'
import React, { useEffect, useState } from 'react'
import TotalCard from './TotalCard'

const ContainerTotalGenresCards = () => {
    const [genres, setGenres] = useState([])

    useEffect(() => {
        axios.get("http://localhost:3030/api/genres/")
            .then(res => {
                /*   console.log("datos"); */
                console.log(res.data);
                setGenres(res.data.meta)
            })
            .catch(error => {
                console.log(error)
            })
    }, [])

    console.log(genres);


    return (


        <div className="container-total-cards">


            <TotalCard table={genres.table} total={genres.total} />


        </div>


    )
}
export default ContainerTotalGenresCards