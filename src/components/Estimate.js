import React from 'react'
import '../styles/Estimate.css'

export default function Estimate() {
    return (
        <>
            <div className="estimate">
                <div className="container">
                    <div className="row">
                        <div className="col-md-5">
                            <div className="free">
                                <h3>Get free Estimate</h3>
                                <p>Esteem spirit temper too say adieus who direct esteem. It look estee luckily or picture placing.</p>
                                <button>+18487894707</button>
                            </div>
                        </div>
                        <div className="col-md-7">
                            <form>
                                <div className="row">
                                    <div className="col-md-6 col-6">
                                        <input placeholder="Your name"/>
                                    </div>
                                    <div className="col-md-6 col-6">
                                        <input placeholder="Email"/>
                                    </div>
                                    <div className="col-md-6 col-6">
                                        <select>
                                            <option>Product type</option>
                                        </select>
                                    </div>
                                    <div className="col-md-6 col-6">
                                        <select>
                                            <option>Product size</option>
                                        </select>
                                    </div>
                                    <div className="col-md-6 col-6">
                                        <select>
                                            <option>City of departure</option>
                                        </select>
                                    </div>
                                    <div className="col-md-6 col-6">
                                        <select>
                                            <option>Delivery city</option>
                                        </select>
                                    </div>
                                    <div className="col-md-12">
                                        <textarea placeholder="Message"/>
                                    </div>
                                </div>
                                <button>Send</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
