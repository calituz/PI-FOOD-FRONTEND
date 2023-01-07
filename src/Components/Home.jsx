import React from "react";
import "./Home.css"




import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllRecipes, filterRecipesByDiets, filterRecipesByApiOrDb, sortByName, sortByHealth, mayorque50 } from "../Redux/actions";

import { Link } from "react-router-dom";

import Recipe from "./Recipe";
import Paginado from "./Paginado";
import SearchBar from "./SearchBar";

export default function Home() {

    const dispatch = useDispatch()
    const allRecipes = useSelector((state) => state.recipes)


    //---PAGINADO---
    const [currentPage, setCurrentPage] = useState(1)
    const [recipesPerPage, setRecipesPerPage] = useState(9)
    const indexOfLastRecipe = currentPage * recipesPerPage //ej: 9 -> 1 * 9
    const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage //ej: 0 -> 9 - 9
    const currentRecipes = allRecipes.slice(indexOfFirstRecipe, indexOfLastRecipe) //ej: [0,1,2...8]

    const paginado = (pageNumber) => {
        setCurrentPage(pageNumber)
    }




    useEffect(() => { dispatch(getAllRecipes()) }, [])

    function handleClickReload(event) {
        event.preventDefault()
        dispatch(getAllRecipes())
    }

    function handleFilterRecipesByDiets(e) {
        dispatch(filterRecipesByDiets(e.target.value))
        setCurrentPage(1)
    }

    function handleFilterRecipesApiOrDb(e) {
        dispatch(filterRecipesByApiOrDb(e.target.value))
        setCurrentPage(1)
    }

    const [orden, setOrden] = useState("")

    function handleAbcSort(e) {
        e.preventDefault()
        dispatch(sortByName(e.target.value))
        setCurrentPage(1)
        setOrden(`Ordenado ${e.target.value}`)
    }

    function handleHealthSort(e) {
        e.preventDefault()
        dispatch(sortByHealth(e.target.value))
        setCurrentPage(1)
        setOrden(`Ordenado ${e.target.value}`)
    }

    function mayor50(event) {
        event.preventDefault()
        dispatch(mayorque50())
        setCurrentPage(1)
    }

    function handleRecipesPerPage(e) {
        e.preventDefault()
        setRecipesPerPage(e.target.value)
        setCurrentPage(1)
    }

    return (
        <>
            <div className="fondo">


                <button className="reload" onClick={event => { handleClickReload(event) }}>Reload recipes</button>



                <SearchBar />

                <div className="Home">
                    <select className="select" onChange={e => handleAbcSort(e)}>
                        <option value="a-z">Ordenar A - Z</option>
                        <option value="z-a">Ordenar Z - A</option>
                    </select>
                    <select className="select" onChange={e => handleHealthSort(e)}>
                        <option value="score_up">Score Up</option>
                        <option value="score_down">Score Down</option>
                    </select>
                    <select className="select" onChange={e => handleFilterRecipesApiOrDb(e)}>
                        <option value="all">All</option>
                        <option value="created">Created</option>
                        <option value="api">Api</option>
                    </select>
                    <select className="select" onChange={e => handleFilterRecipesByDiets(e)}>
                        <option value="All diets">All diets</option>
                        <option value="dairy free">dairy free</option>
                        <option value="vegan">vegan</option>
                        <option value="lacto ovo vegetarian">lacto ovo vegetarian</option>
                        <option value="paleolithic">paleolithic</option>
                        <option value="primal">primal</option>
                        <option value="whole 30">whole 30</option>
                        <option value="pescatarian">pescatarian</option>
                        <option value="ketogenic">ketogenic</option>
                        <option value="fodmap friendly">fodmap friendly</option>
                        <option value="gluten free">gluten free</option>
                    </select>
                    <select className="select" onChange={e => handleRecipesPerPage(e)}>
                        <option value={allRecipes.length}>All recipes</option>
                        <option value="15">15 recipes</option>
                        <option value="12" >12 recipes</option>
                        <option value="9" selected>9 recipes per page</option>
                        <option value="6">6 recipes</option>
                        <option value="3">3 recipes</option>


                    </select>
                    <button className="select" onClick={event => { mayor50(event) }}>mayor que 50</button>

                    <Link to="/recipes" className="crear-recetas">Create a Recipe</Link>

                    <div className="grid-paginado">
                        <Paginado
                            recipesPerPage={recipesPerPage}
                            allRecipes={allRecipes.length}
                            paginado={paginado}
                        />



                    </div>


                    <div className="grid-home">



                        {currentRecipes.map((e) => <Recipe
                            title={e.title}
                            image={e.image}
                            healthScore={e.healthScore}
                            summary={e.summary}
                            analyzedInstructions={e.analyzedInstructions}
                            id={e.id}
                            diets={e.diets}
                            key={e.id}
                            createdInDb={e.createdInDb} />)}

                    </div>

                    {currentRecipes.length ? null : <p className="loading">Loading recipes...</p>}




                </div>
            </div>
        </>
    )

}

/* import React from "react";
import { Link } from "react-router-dom";
import Recipes from "./Recipes";

const Home = () => {

    return (
        <div>
            <h3>COMPONENTE HOME</h3>
            <Recipes />
            
        </div>
    )

}

export default Home */