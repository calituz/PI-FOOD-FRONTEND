import React from "react";
import "./Paginado.css"

export default function Paginado({ recipesPerPage, allRecipes, paginado }) {

    const pageNumbers = []

    for (let i = 1; i <= Math.ceil(allRecipes / recipesPerPage); i++) {
        pageNumbers.push(i)
    }

    return (
        <div id="navcontainer">

            {pageNumbers && pageNumbers.map(number => (
                <button className="number" key={number} onClick={() => paginado(number)}>{number}</button>
            ))}


            {/* <ul className="paginado" id="navlist">
                {pageNumbers && pageNumbers.map(number => (
                    <li className="number" key={number} id="active">
                    <a onClick={() => paginado(number)} id="current">{number} </a>
                    </li>
                ))}
            </ul> */}
        </div>
    )

}
