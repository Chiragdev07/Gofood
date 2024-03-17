import React from 'react'
import {Link}from 'react-router-dom';


export const Navabar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-dark">
                <Link className="navbar-brand text-light fs-1 fst-italic" to={"/"}>GoFood</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link className="nav-item nav-link active text-light" to={"/"}>Home</Link>
                        <Link className="nav-item nav-link text-light" to={"/Login"}>Login</Link>
                        
                        
                    </div>
                </div>
            </nav>
        </div>
    )
}
