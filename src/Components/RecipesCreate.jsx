import React, { useState, useEffect, useRef } from "react"
import { Link, useHistory } from "react-router-dom"
import { postRecipes, getDiets } from "../Redux/actions";
import { useDispatch, useSelector } from "react-redux";

import "./RecipeCreate.css"

function validateForm(input) {

    var letters = /^[A-Za-z]+$/;
    var numbers = /^[0-9]+$/;

    let errors = {}
    if (!input.title) errors.title = "Title is required"
    if (!input.summary) errors.summary = "Summary is required"
    if (!input.healthScore) errors.healthScore = "Health Score is required"
    if (!input.analyzedInstructions) errors.analyzedInstructions = "Instructions are required"

    /* if (!input.title.match(letters)) errors.title = "Only letters allowed"
    if (!input.summary.match(letters)) errors.summary = "Only letters allowed" */
    if (input.healthScore.match(letters)) errors.healthScore = "Only numbers allowed"

    return errors

}



export default function RecipesCreate() {
    const dispatch = useDispatch()
    const diets = useSelector((state => state.diets))

    const [errors, setErros] = useState({})

    const [input, setInput] = useState({
        title: "",
        summary: "",
        healthScore: "",
        analyzedInstructions: "",
        image: "",
        dietsCheck: [],
        //dietsSelect: [],
    })

    // ---DISABLE SUBMIT BUTTON---
    var numbers = /^[0-9]+$/;
    var letters = /^[A-Za-z]+$/;
    var disable = false
    if (input.title === "" ||
        input.summary === "" ||
        input.healthScore === "" ||
        // input.healthScore == letters ||
        input.analyzedInstructions == "") {
        disable = true
    } else {
        disable = false
    }

    function handleChange(e) {
        setInput({ ...input, [e.target.name]: e.target.value })

        setErros(validateForm({ ...input, [e.target.name]: e.target.value }))
    }

    var checkboxCounter = useRef(0)
    function handleCheck(e) {
        if (e.target.checked) {
            setInput({ ...input, dietsCheck: [...input.dietsCheck, e.target.value] })
            checkboxCounter.current++
            //e.target.disabled = true
            for (let i = 0; i < 2; i++) {

            }
        }
        if (!e.target.checked) {
            setInput({ ...input, dietsCheck: [...input.dietsCheck.filter(el => el !== e.target.value)] })
            checkboxCounter.current--

        }
        console.log(checkboxCounter)
        console.log(checkDisabler)
    }
    let checkDisabler = false
    if (checkboxCounter.current === 99) checkDisabler = true

    /* function handleSelect(e) {
        setInput({
            ...input,
            dietsSelect: [...input.dietsSelect, e.target.value]
        })
    } */

    function handleSubmit(e) {
        e.preventDefault()
        dispatch(postRecipes(input))
        alert("recipe created")
        /*  setInput({
             title: "",
             summary: "",
             healthScore: "",
             analyzedInstructions: "",
             //dietsCheck: "",
             //dietsSelect: [],
         }) */
    }

    useEffect(() => { dispatch(getDiets()) }, [])

    return (

        <div className="recipes-create">
            <Link to="/home"><button className="backtohomepage">Back to Homepage</button></Link>
            <h1 className="title">Recipe Creation Form</h1>
            <div class="container123">
                <form onSubmit={(e) => handleSubmit(e)}>
                    
                 
                    <label for="ftitle">Title:</label>
                    <input class= "input" type="text" value={input.title} name="title" placeholder="A recipe name..." onChange={handleChange} />
                    {errors.title && (<p className="i1"><span>{errors.title}</span></p>)}

                    <label for="fsummary">Summary:</label>
                    <textarea class= "input" value={input.summary} name="summary" placeholder="A recipe summary..." onChange={handleChange} />
                    {errors.summary && (<p className="i2"><span>{errors.summary}</span></p>)}

                    <label for="fhealthscore">Health Score:</label>
                    <input class= "input" type="text" value={input.healthScore} name="healthScore" placeholder="1 to 100" onChange={handleChange} />
                    {errors.healthScore && (<p className="i3"><span>{errors.healthScore}</span></p>)}

                    <label>Instructions:</label>
                    <textarea value={input.analyzedInstructions} name="analyzedInstructions" placeholder="Some instructions..." onChange={handleChange} />
                    {errors.analyzedInstructions && (<p className="i4"><span>{errors.analyzedInstructions}</span></p>)}

                    <label>Image:</label>
                    <input class= "input" type="text" value={input.image} name="image" placeholder="Optional picture URL..." onChange={handleChange} />

                    <label>Diets:</label>
                    <div className="grid">
                        
                        <label><input type="checkbox" disabled={checkDisabler} value="gluten free" name="gluten free" id="1"
                            onChange={(e) => handleCheck(e)}
                        />gluten free</label>
                        <label><input type="checkbox" value="dairy free" name="dairy free" id="2" disabled={checkDisabler}
                            onChange={(e) => handleCheck(e)}
                        />dairy free</label>
                        <label><input type="checkbox" value="lacto ovo vegetarian" name="lacto ovo vegetarian" disabled={checkDisabler}
                            onChange={(e) => handleCheck(e)}
                        />lacto ovo vegetarian</label>
                        <label><input type="checkbox" value="vegan" name="vegan"
                            onChange={(e) => handleCheck(e)}
                        />vegan</label>
                        <label><input type="checkbox" value="paleolithic" name="paleolithic"
                            onChange={(e) => handleCheck(e)}
                        />paleolithic</label>
                        <label><input type="checkbox" value="primal" name="primal"
                            onChange={(e) => handleCheck(e)}
                        />primal</label>
                        <label><input type="checkbox" value="whole 30" name="whole 30"
                            onChange={(e) => handleCheck(e)}
                        />whole 30</label>
                        <label><input type="checkbox" value="pescatarian" name="pescatarian"
                            onChange={(e) => handleCheck(e)}
                        />pescatarian</label>
                        <label><input type="checkbox" value="ketogenic" name="ketogenic"
                            onChange={(e) => handleCheck(e)}
                        />ketogenic</label>
                        <label><input type="checkbox" value="fodmap friendly" name="fodmap friendly"
                            onChange={(e) => handleCheck(e)}
                        />fodmap friendly</label>
                    </div>

                    <ul><li>{input.dietsCheck.map((e) => e + " - ")}</li></ul>


                    {/* <select onChange={(e) => handleSelect(e)}>{diets.map((e) => <option value={e.name}>{e.name}</option>)}</select> */}

                    {/* <ul><li>{input.dietsSelect.map((e) => e + " - ")}</li></ul> */}



                    <button className="input" type="submit" id="button" disabled={disable}>CREAR RECETA</button>

                </form>
            </div>
        </div>
    )

}








/* import React from "react";
import { connect } from "react-redux";
import { getAllRecipes } from "../Redux/actions";
import Recipe from "./Recipe";

class Recipes extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.getAllRecipes()
        
    }

    render() {
        return (
            <>
         { console.log(this.props.recipes,"console")}
                <h1>Estamos en componente Recipes</h1>
                {
                    
                    this.props.recipes?.map((e) => <Recipe title={e.title} image={e.image} />)
                }
            </>
        )
    }
}

const mapStateToProps = (state) => { //esta funcion toma el Estado y lo envia como Prop para ser usada por este componente
    return {
        recipes: state.recipes
    }
}

const mapDispatchToProps = (dispatch) => {//hace Dispatch de la accio
    return {
        getAllRecipes: () => dispatch(getAllRecipes())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Recipes) //permite (conecta) el intercambio de info entre React y Redux
 */