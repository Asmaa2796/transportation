import React from 'react'
import { NavLink } from 'react-router-dom'
import { Link } from "react-scroll";
import '../styles/Header.css'
export default function Header() {

    return (
        <div className="header">
            <div className="container">
                <div className="content">
                    <h1>Global Logistics</h1>
                    <p>
                        Transport quality and excellence to enhance your business
                    </p>
                    <NavLink to="/about"><button>Explore us <i className="fas fa-arrow-right"></i></button></NavLink>
                </div>
                <div className="text-center">
                    <Link smooth={true} to="services"><img className="vert-move" src={"./images/down-arrow.png"}  /></Link>
                </div>
            </div>
        </div>
    )
}
