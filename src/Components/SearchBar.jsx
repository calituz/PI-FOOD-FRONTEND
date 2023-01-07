import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getRecipeName } from "../Redux/actions";

import "./SearchBar.css"

export default function SearchBar () {
    const dispatch = useDispatch()
    const [name, setName] = useState("")

    const handleInputChange = (e) => {
        e.preventDefault()
        setName(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(getRecipeName(name))
    }

    return (
        <div>
            
            <input type="text" className="searchInput" placeholder="Search recipes here..." onChange={(e) => handleInputChange(e)}/>
            <button className="search" type="submit" onClick={(e) => handleSubmit(e)}>Search</button>
            
            

        </div>
    )

}