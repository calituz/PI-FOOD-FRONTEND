import { GET_ALL_RECIPES } from "./actions";
import { FILTER_DIETS } from "./actions";
import { FILTER_RECIPES } from "./actions";
import { SORT_BY_NAME } from "./actions";
import { SORT_BY_HEALTH } from "./actions";
import { GET_RECIPE_NAME } from "./actions";
import { GET_DIETS } from "./actions";
import { GET_DETAILS } from "./actions";
import { MAYOR50 } from "./actions";
import { DELETE } from "./actions";
import { ITEM_CART } from "./actions";

const cartItemsFromLocalStorage = JSON.parse(localStorage.getItem("cartItems") || "[]")

const initialState = {
    recipes: [],
    allRecipes: [], //necesario para los filtros (inmutable)
    diets: [],
    details: [],
    items: cartItemsFromLocalStorage || []
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {

        case GET_ALL_RECIPES:
            return {
                ...state,
                recipes: action.payload,
                allRecipes: action.payload
            }

        case GET_RECIPE_NAME:
            return {
                ...state,
                recipes: action.payload,

            }

        case FILTER_DIETS:
            const allRecipes = state.allRecipes
            let recipesDb = []
            let recipesApi = []
            let recipesFiltered = []
            if (action.payload === "All diets") {
                recipesFiltered = state.allRecipes
            } else {
                allRecipes.forEach(recipe => {
                    if (recipe.createdInDb) {
                        recipe.diets.map(diet => {
                            if (diet.name === action.payload) recipesDb.push(recipe)
                        })
                    } else {
                        recipe.diets.map(diet => { if (diet === action.payload) recipesApi.push(recipe) })
                    }
                })
                recipesFiltered = recipesDb.concat(recipesApi)
            }



            return {
                ...state,
                recipes: recipesFiltered
            }

        /*  case FILTER_DIETS:
             const allRecipes = state.allRecipes
             const recipesFiltered = action.payload === "All diets" ?
                 allRecipes : allRecipes.filter(e => e.diets.includes(action.payload))
 
             return {
                 ...state,
                 recipes: recipesFiltered
             } */

        case FILTER_RECIPES:
            let recipesFilteredCreated = []
            if (action.payload === "api") {
                recipesFilteredCreated = state.allRecipes.filter(e => !e.createdInDb)
            } else if (action.payload === "created") {
                recipesFilteredCreated = state.allRecipes.filter(e => e.createdInDb)
            } else {
                recipesFilteredCreated = state.allRecipes
            }


            /*  const recipesFilteredCreated = action.payload === "created" ? 
             state.allRecipes.filter(e => e.createdInDb) : 
             state.allRecipes.filter(e => !e.createdInDb) */

            return {
                ...state,
                recipes: recipesFilteredCreated
            }

        case SORT_BY_NAME:
            let sortedAbcArr = action.payload === "a-z" ?
                state.recipes.sort(function (a, b) {
                    if (a.title > b.title) return 1
                    if (b.title > a.title) return -1
                    return 0
                })

                :

                state.recipes.sort(function (a, b) {
                    if (a.title > b.title) return -1
                    if (b.title > a.title) return 1
                    return 0
                })

            return {
                ...state,
                recipes: sortedAbcArr
            }

        case SORT_BY_HEALTH:
            let sortedHealthArr = action.payload === "score_down" ?
                state.recipes.sort(function (a, b) {
                    if (a.healthScore > b.healthScore) return 1
                    if (b.healthScore > a.healthScore) return -1
                    return 0
                })

                :

                state.recipes.sort(function (a, b) {
                    if (a.healthScore > b.healthScore) return -1
                    if (b.healthScore > a.healthScore) return 1
                    return 0
                })

            return {
                ...state,
                recipes: sortedHealthArr
            }

        case "POST_RECIPES":
            return {
                ...state,
            }

        case GET_DIETS:
            return {
                ...state,
                diets: action.payload
            }

        case GET_DETAILS:
            return {
                ...state,
                details: action.payload
            }

        case MAYOR50:
            return {
                ...state,
                recipes: state.allRecipes.filter(e => e.healthScore >= 90)
            }

        case "DELETE":
            return {
                ...state,
            }

        case ITEM_CART:
            return {
                ...state,
                items: [...state.items, action.payload]
            }

        default:
            return { ...state }
    }
}

export default rootReducer