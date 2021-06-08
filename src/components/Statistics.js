import React from 'react'
import '../styles/Statistics.css'

export default function Statistics() {
    return (
        <>
            <div className="statistics">
                <br/><br/><br/>
                <div className="container">
                    <div className="text-center"><h3 className="title">Our Statistics</h3></div>
                    <br/>
                    <div className="row">
                        <div className="col-md-12">
                            <p className="text">
                                <i className="fas fa-caret-right"></i> 
                                SOME STATISTICS THAT WE WANT <br/>
                                TO SHOW OUR VIEWERS
                            </p>
                        </div>
                        <div className="col-md-12">
                            <div className="row">
                                <div className="col-md-3 col-6">
                                    <div className="stats wow bounceInUp" data-wow-offset={100}>
                                        <img src={"./images/package (1).png"} alt="img" />
                                        <div>
                                            <h5>Packages Delivered</h5>
                                            <strong>+2230</strong>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3 col-6">
                                    <div className="stats wow bounceInUp" data-wow-offset={100} data-wow-delay=".3s">
                                        <img src={"./images/customer-satisfaction.png"} alt="img"/>
                                        <div>
                                            <h5>Satisfied Clients</h5>
                                            <strong>+500</strong>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3 col-6">
                                    <div className="stats wow bounceInUp" data-wow-offset={100} data-wow-delay=".5s">
                                        <img src={"./images/coronavirus.png"} alt="img"/>
                                        <div>
                                            <h5>Contries Reach</h5>
                                            <strong>+77</strong>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3 col-6">
                                    <div className="stats wow bounceInUp" data-wow-offset={100} data-wow-delay=".7s">
                                        <img src={"./images/protection.png"} alt="img"/>
                                        <div>
                                            <h5>Tons of Goods</h5>
                                            <strong>+8000</strong>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>    
            </div>   
        </>
    )
}
