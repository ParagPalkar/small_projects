import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Cats = () => {

    const [cat, setCat] = useState([]);
    
    useEffect(()=>{
        axios.get('https://api.thecatapi.com/v1/breeds')
        .then(response => {setCat(response.data);
            console.log(response.data);
        })
        .catch(err => {
            console.log(err);
        })
    },[])

  return (
    <>
    <h1>CATS</h1>
    <div>
        {
            cat.map((item)=>(
                <>
                <div className="card">
                <h3>Name:{item.name}</h3>
                <h3>Origin:{item.origin}</h3>
                </div>

                </>
            ))
        }
    </div>
    </>
    
  )
}

export default Cats