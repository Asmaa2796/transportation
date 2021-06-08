import '../styles/About.css'
import Navbar2 from '../components/Navbar2.js'
import Footer from './Footer.js'
import React, { Component } from 'react'
import axios from 'axios'

export default class About extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             about : []
        }
    }
    componentDidMount () {
        axios.get('../js/Data.json').then(res => {this.setState({about : res.data.about})})
    }
    
    render() {
        const {about} = this.state
        const content = about.map((part) => {
            return (
                <div className="holder" key={part.ID}>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="text">
                            <h5>{part.title}</h5>
                            <p>
                                {part.paragraph}
                            </p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="image">
                            <img src={part.image} className="vert-move" alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            )
        })
        return (
            <>
                <Navbar2/>
                <div className="about pd">
                    <div className="container">
                    <h4 className=""><img style={{width:'30px'}} src="./images/sticky-notes.png" alt=""/> About us</h4>
                    {content}
                    </div>
                </div>
                <Footer/>
            </>
        )
    }
}
