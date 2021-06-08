import React, { Component } from 'react'
import '../styles/Pricing.css'
import axios from 'axios'
import styled from 'styled-components'

export const Packbutton = styled.button `
    color: #fff;
    padding: 11px 20px;
    font-size: 15px;
    margin: 12px 0px;
    border: none;
    background-color: ${props => props.dif === 2 ? "#1d6284 !important" : "#E63946"}
`
export const Packtitle = styled.h3 `
    color: #fff;
    padding: 11px 20px;
    font-size: 15px;
    margin: 12px 0px;
    border: none;
    color: ${props => props.diff === 2 ? "#E63946 !important" : "#1d6284"}
`
export default class Pricing extends Component {
   
    constructor(props) {
        super(props)
    
        this.state = {
            pricing : []
        }
    }

    componentDidMount () {
        axios.get('../js/Data.json').then((res) => {this.setState({pricing : res.data.pricing})})
    }
    
    render() {
       
        const {pricing} = this.state
        const priceCard = pricing.map((price) => {
            return (
                <div className="col-md-4" key={price.ID}>
                    <div className="package">
                        <img src={price.image}/>
                        <Packtitle diff={price.ID}>{price.title}</Packtitle>
                        <sup>{price.sup}</sup>/<sub>{price.sub}</sub>
                        <ul className="list-unstyled">
                            <li>{price.item1}</li>
                            <li>{price.item2}</li>
                            <li>{price.item3}</li>
                            <li>{price.item4}</li>
                            <li>{price.item5}</li>
                        </ul>
                        <Packbutton dif={price.ID}>{price.button}</Packbutton>
                    </div>
                </div>
            )
        })
        return (
            <>
                <div className="pricing text-center">
                    <div className="container">
                        <div className="text-center"><h3 className="title">Our Pricing</h3></div>
                        <br/>
                        <div className="row">
                            {priceCard}
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
