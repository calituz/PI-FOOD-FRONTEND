import React from "react";
import { Link } from "react-router-dom";
import "./Landing.css"

const Landing = (props) => {
    return (

        <div className="landingBg">
            <div className="content ">
                <div className="container1">
                    <div className="rectangulo">
                        <h1 className="h1">FOOD API</h1>
                        <Link to="/home">
                            <button className="button">sarasa</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Landing
