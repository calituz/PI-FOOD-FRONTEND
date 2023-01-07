import React, { useEffect } from "react"
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";
import { getDetails } from "../Redux/actions";
import RecipesCreate from "./RecipesCreate";
import { deleteRecipe } from "../Redux/actions";

import "./Details.css"

export default function Details(props) {

    const dispatch = useDispatch()

    useEffect(() => { dispatch(getDetails(props.match.params.id)) }, [dispatch])

    const recipe = useSelector((state) => state.details)

    function handleClick(e) { //DELETE RECIPE
        e.preventDefault()
        dispatch(deleteRecipe(props.match.params.id))
    }

    return (



        <div className="details">



            <Link to="/home"><button className="back-to-home">Back to Homepage</button></Link>



            {recipe.length > 0 ?

                <div>
                    {recipe[0].createdInDb ?
                        <p><button className="delete" onClick={(e) => handleClick(e)}>Delete Recipe</button></p>
                        :
                        null}

                    <div className="cont1">

                        <h1>{recipe[0].title}</h1>

                        <img src={recipe[0].image} alt="pic" />


                        <h1>Health Score: {recipe[0].healthScore}</h1>

                        {recipe[0].createdInDb ?
                            <h3>Diets: {recipe[0].diets.map(e => e.name + " - ")} </h3>
                            :
                            <h3>Diets: {recipe.map(e => e.diets + " - ")} </h3>}

                        {recipe[0].dishTypes ?
                            <h3>Dish Types: {recipe.map(e => e.dishTypes + " - ")}</h3>
                            :
                            <h3>Dish Types: There are no dish types...</h3>}

                    </div>
                    <div className="cont2">
                        <h1>Summary:</h1><h3>{recipe[0].summary.replace(/<[^>]*>?/g, '')}</h3>
                    </div>
                    <div className="cont3">
                        <h1>Instructions:</h1>
                         <h3>
                            {recipe[0].analyzedInstructions !== "" ? 
                            recipe[0].analyzedInstructions
                            :
                            <h3>There are no instructions...</h3>
                            }
                            </h3>
                    </div>
                </div>

                : <div className="loading">Loading recipe...</div>}

        </div>
    )

}
