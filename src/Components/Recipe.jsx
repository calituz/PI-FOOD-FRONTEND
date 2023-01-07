import React from "react";
import { Link } from "react-router-dom";
import "./Recipe.css"


const Recipe = ({ title, image, diets, id, healthScore, createdInDb }) => {

    
    
    

   

    return (
        <div className="recipe">
            <Link to={`/recipeDetails/${id}`}>
                <h3>{title}</h3>
                <div className="imageasdasd">
                    <img className="image" src={image} alt="pic" />
                </div>
                <div className="hs">{healthScore}</div>

                {createdInDb ?
                    <h3>Diets: {diets.map(e => e.name + " - ")}</h3>
                    :
                    <h3>Diets: {diets.map(e => e + " - ")}</h3>}



            </Link>



        </div>
    )
}

export default Recipe




/* import React from "react";
import { Link } from "react-router-dom";

const Recipe = ({ title, image }) => {
    return (
        <>
            <h3>{title}</h3>
            <p><img src={image} alt="pic" /></p>
            <hr></hr>
        </>
    )
}

export default Recipe
 */
