import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRecipeName, itemCart } from "../Redux/actions";


import "./SearchBar.css"

//const cartItemsFromLocalStorage = JSON.parse(localStorage.getItem("cartItems") || "[]")

export default function SearchBar () {
    
    const dispatch = useDispatch()
    const [name, setName] = useState("")

    const items = useSelector((state) => state.items)
    const [item, setItem] = useState("")
    useEffect(() => { localStorage.setItem("cartItems", JSON.stringify(items)) }, [items]);
    

    const handleInputChange = (e) => {
        e.preventDefault()
        setName(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(getRecipeName(name))
        dispatch(itemCart(name))
        
    }

    return (
        <div>
            
            <input type="text" className="searchInput" placeholder="Search recipes here..." onChange={(e) => handleInputChange(e)}/>
            <button className="search" type="submit" onClick={(e) => handleSubmit(e)}>Search</button>
            
            

        </div>
    )

}