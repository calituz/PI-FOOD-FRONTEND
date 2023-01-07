import axios from "axios"

export const GET_ALL_RECIPES = "GET_ALL_RECIPES"
export const FILTER_DIETS = "FILTER_DIETS"
export const FILTER_RECIPES = "FILTER_RECIPES"
export const SORT_BY_NAME = "SORT_BY_NAME"
export const SORT_BY_HEALTH = "SORT_BY_HEALTH"
export const GET_RECIPE_NAME = "GET_RECIPE_NAME"
export const GET_DIETS = "GET_DIETS"
export const GET_DETAILS = "GET_DETAILS"
export const MAYOR50 = "MAYOR50"
export const DELETE = "DELETE"

export const getAllRecipes = () => {
    return function (dispatch) {
        fetch("https://pi-food-backend-production-992b.up.railway.app/recipes")
            .then((response) => response.json())
            .then((data) => dispatch({ type: GET_ALL_RECIPES, payload: data }))
    }
}

export function getDiets () {
    return async function (dispatch) {
        var diets = await axios.get("https://pi-food-backend-production-992b.up.railway.app/diets", {})
        return dispatch({type: GET_DIETS, payload: diets.data})
    }
}

export function postRecipes (payload) {
    return async function (dispatch) {
        var response = await axios.post("https://pi-food-backend-production-992b.up.railway.app/recipes", payload)
        return response
    }
}

export function getRecipeName (payload) {
    return async function (dispatch){
        try {
            var response = await axios.get("https://pi-food-backend-production-992b.up.railway.app/recipes?title=" + payload)
            return dispatch({
                type: GET_RECIPE_NAME,
                payload: response.data
            })
        } catch (error) {
            console.log(error)
            alert("Recipe not found")
        }
    }
}

export const filterRecipesByDiets = (payload) => {
    return {
        type: "FILTER_DIETS",
        payload
    }
}

export const filterRecipesByApiOrDb = (payload) => {
    return {
        type: "FILTER_RECIPES",
        payload
    }
}

export const sortByName = (payload) => {
    return {
        type: "SORT_BY_NAME",
        payload
    }
}

export const sortByHealth = (payload) => {
    return {
        type: "SORT_BY_HEALTH",
        payload
    }
}

export const mayorque50 = (payload) => {
    return {
        type: "MAYOR50",
        payload
    }
}

export const getDetails = (id) => {
    return async function (dispatch) {
        try {
            
            var response = await axios.get("https://pi-food-backend-production-992b.up.railway.app/recipes/" + id)
            return dispatch ({
                type: "GET_DETAILS",
                payload: response.data
            })

        } catch (error) {
            console.log(error)
        }
    }
}

export const deleteRecipe = (id) => {
    return async function (dispatch) {
        try {
            
            var response = await axios.delete("https://pi-food-backend-production-992b.up.railway.app/recipes/" + id)
            return dispatch ({
                type: "DELETE",
                payload: response.data
            })

        } catch (error) {
            console.log(error)
        }
    }
}