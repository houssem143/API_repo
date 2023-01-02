import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Card } from 'react-bootstrap';

const Main = () => {
    const [pokeData, setPokeData] = useState([]);
    const [loading, setLoading] = useState(true);
  useEffect(() => {
    const pokeFun=async()=>{
       try {
        const res=await axios.get(
            'https://pokeapi.co/api/v2/pokemon'
        )
        console.log((res))
        setPokeData(res.data)
        console.log(res.data.results)
        setLoading(false)
       } catch (error) {
        console.log(error)
       }
      }
      pokeFun()
  }, [])
  
  
    return (
    <div>
        <Card pokemon={pokeData} loading={loading} />
    </div>
  )
}

export default Main