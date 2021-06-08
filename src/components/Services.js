import React, { Component } from 'react'
import '../styles/Services.css'
import WOW from 'wowjs';

export default class Services extends Component {
    componentDidMount() {
        new WOW.WOW({
          live: false
      }).init();
      }
    render() {
        return (
            <>
                <div className="services pd text-center">
                    <div className="container">
                        <h3 className="title">Our Services</h3>
                        <div className="row">
                            <div className="col-md-3">
                                <div className="serv wow fadeIn" data-wow-offset={100}>
                                    <img src={"./images/shipment.png"} alt="img"/>
                                    <h5>Transportation</h5>
                                    <p>
                                        Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="serv wow fadeIn" data-wow-offset={100} data-wow-delay="0.5s">
                                    <img src={"./images/calculator.png"} alt="img"/>
                                    <h5>Shipping Calculator</h5>
                                    <p>
                                        Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="serv wow fadeIn" data-wow-offset={100} data-wow-delay="0.8s">
                                    <img src={"./images/worldwide-shipping.png"} alt="img"/>
                                    <h5>Worldwide Service</h5>
                                    <p>
                                        Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="serv wow fadeIn" data-wow-offset={100} data-wow-delay="1s">
                                    <img src={"./images/tracking.png"} alt="img"/>
                                    <h5>Shipment Tracking</h5>
                                    <p>
                                        Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

