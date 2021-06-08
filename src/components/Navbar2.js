import React from 'react'
import '../styles/Navbar2.css'
import {NavLink} from 'react-router-dom'
import { nodeName } from 'jquery'
export default function Navbar() {
    return (
        <>
            <nav className="navbar nav2 navbar-expand-lg navbar-light">
                <div className="container">
                    <NavLink className="navbar-brand" to="/">LOGISTICS</NavLink>
                    <NavLink style={{textDecoration:'none',color:'#fff',position:'relative'}} to="/">Back</NavLink>
                </div>
            </nav> 
        </>
    )
}
