import React, { Component } from 'react'

class EventBind extends Component {
    constructor(props) {
        super(props)
        this.clickHandler = this.clickHandler.bind(this);
        this.state = {
             message: "Hello"
        }
    }

    clickHandler() {
        this.setState({
            message: "Goodbye"
        })
        console.log(this)
    }

    // clickHandler = () => {
    //     this.setState({
    //         message: "Goodbye"
    //     })
    // }
    
    render() {
        return (
            <div>
                <div>{this.state.message}</div>

                {/*1st Method using bind in render function */} 
                {/* <button onClick={this.clickHandler.bind(this)}>Click all</button> */}
                
                {/*2nd Method using arrow function */} 
                {/* <button onClick={() => this.clickHandler()}>Click all</button> */}

                {/* 3rd Method using bind in constructor */} 
                {/*bind method in class cosntructor see line 6  */ }
                <button onClick={this.clickHandler}>Click all</button>
                                
                {/* 4th Method using arrow function while defining the method see line 19*/} 
                {/* class property as arrow function */}
                {/* <button onClick={this.clickHandler}>Click all</button> */}
                
            </div>
        )
    }
}

export default EventBind
