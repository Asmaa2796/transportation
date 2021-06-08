import React, { Component } from 'react'
import '../styles/ScrollTop.css'

export default class ScrollTop extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             is_visible : false
        }
    }

    componentDidMount () {
        var scrollComponent = this;
        document.addEventListener("scroll",function(e) {
            scrollComponent.toggleVisibility();
        });
    }

    toggleVisibility () {
        if (window.pageYOffset >= 200) {
            this.setState({
                is_visible : true,
            });
        }
        else {
            this.setState({
                is_visible : false
            });
        }
    }
    scrollTop () {
        window.scrollTo({
            top:0,
            behavior:"smooth"
        });
    }
    
    render() {
        const { is_visible } = this.state;
        return (
            <>
                {is_visible && (
                    <div className="scroll-top" onClick={() => this.scrollTop()}>
                        <img src={"./images/right-arrow.png"} alt="img"/>
                    </div>
                )}
            </>
        )
    }
}
