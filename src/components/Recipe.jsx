
import axios from 'axios';
import React, { useState } from 'react'

const Recipe = () => {
    const [text, setText] = useState("")
    const [recipe, setRecipe] = useState([])
    const [loading, setLoading] = useState(true)
    const [show, setShow] = useState(false)
    const options = {
        method: 'GET',
        url: 'https://edamam-recipe-search.p.rapidapi.com/search',
        params: {q: text},
        headers: {
          'X-RapidAPI-Key': 'c365876e48msh663fbccccb31632p1bbad3jsn7e9775e2d287',
          'X-RapidAPI-Host': 'edamam-recipe-search.p.rapidapi.com'
        }
      };
     const handleSubmit = (e)=>{
        e.preventDefault();
        // axios.request(options).then(function (response) {
        //     console.log(response.data);
        // }).catch(function (error) {
        //     console.error(error);
        // });
        const fetchData = async() => {
            try {
                const res = await axios.request(options)
                console.log(res.data)
             setRecipe(res.data.hits)
             setLoading(false)
            } catch (error) {
                console.error(error)
            }
        }
        fetchData()
        setText("")
     }
      
  return (
    <div>
        <form action="" onSubmit={handleSubmit} >
            <input type="text" value={text} onChange={(e)=>setText(e.target.value)} />
            <button>search</button>
        </form>
        {
            loading? <h3>loading...</h3>
            :
            <div>
                {recipe.map(el=>
                    
                    <div style={{border:"1px solid black"}} >
                        <h2> {el.recipe.label} </h2>
                        <img src={el.recipe.image} height={300} width={400} alt="" />
                        <h3> calories: {el.recipe.calories} </h3>
                        <h3  onClick={()=>setShow(!show)}> ingredients: </h3>
                        {
                            show?

                            <div>
                                {
                                    el.recipe.ingredients.map(el=>
                                        <p> {el.text} </p>
                                        )
                                    }
                            </div>
                            :null}
                    </div>
                    )}
            </div>
        }
    </div>
  )
}

export default Recipe