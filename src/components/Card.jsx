import React from 'react'

const Card = ({pokemon,loading}) => {
    console.log(pokemon)
  return (
    <div>
        {
            loading ? <h3>Loading...</h3>:
            pokemon.map(el=>
             <div>
                <h3>{el.name}</h3>
              
                  <h3>{el.url}</h3>
             </div>
                )
        }
    </div>
  )
}

export default Card