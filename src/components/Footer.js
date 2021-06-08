// import React from 'react'
import '../styles/Footer.css'
import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class Footer extends Component {
    render() {
        return (
            <>
                <footer className="footer">
                    <div className="container">
                    <div className="row">
                        <div className="col-md-4 col-5">
                            <div className="navigation">
                            <h5>Sitemap</h5>
                            <NavLink exact to="/">Home</NavLink>
                            <NavLink to="/about">About us</NavLink>
                            <a>Services</a>
                            <a>Statistics</a>
                            <a>Contact us</a>
                            </div>
                        </div>
                        <div className="col-md-4 col-7">
                            <div className="social-links">
                            <h5>Contact us</h5>
                            <div className="">
                                <ul className="list-unstyled">
                                <li><i className="fas fa-map-marker-alt"></i> <span>Egypt</span></li>
                                <li><i className="fab fa-facebook-f"></i> <span>Logistics</span></li>
                                <li><i className="fas fa-envelope"></i> <span>example@gmail.com</span></li>
                                <li><i className="fas fa-mobile-alt"></i> <span>01000010000</span></li>
                                </ul>
                            </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                        <div className="subscribe">
                            <h5>Newsletter</h5>
                            <form id="subscribe" method="POST">
                                <div className="row">
                                    <div className="col-md-9 col-9">
                                        <div>
                                        <input className="form-control" type="email" name="email" id="email" placeholder="Enter Your Email"/>
                                        </div>
                                    </div>
                                    <div className="col-md-3 col-3">
                                        <button type="submit"><i className="fas fa-arrow-right"></i></button>
                                        <div className="text-center loader"></div>
                                    </div>
                                </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-md-12 text-center">
                            <hr/>
                            <span>All rights reserved © 2021 <b>Asmaa saad</b> </span>
                        </div>
                        </div>
                    </div>
                </footer>   
            </>
        )
    }
}

