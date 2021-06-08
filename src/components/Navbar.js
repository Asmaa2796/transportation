import React from 'react'
import '../styles/Navbar.css'
import { Link } from "react-scroll";
import {NavLink} from 'react-router-dom'
export default function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg">
                <div className="container">
                    <NavLink className="navbar-brand" to="/">LOGISTICS</NavLink>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"><i className="fas fa-bars"></i></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav">
                        <li className="nav-item active">
                            <NavLink exact className="nav-link" to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="services">Services</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="statistics">Statistics</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="pricing">Pricing</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="footer">Contact us</Link>
                        </li>
                        </ul>
                    </div>
                    <div className="social">
                        <ul className="list-unstyled">
                            <li><i className="fab fa-facebook-f"></i></li>
                            <li><i className="fab fa-twitter"></i></li>
                            <li><i className="fab fa-youtube"></i></li>
                        </ul>
                    </div>
                </div>
            </nav> 
        </>
    )
}
