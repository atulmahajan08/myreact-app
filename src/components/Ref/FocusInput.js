import React, { Component } from 'react'
import InputClassRef from "./InputClassRef"

class FocusInput extends Component {
    constructor(props) {
        super(props)

        this.componentRef = React.createRef()
    }

    clickHandler = () => {
        // this.componentRef.current.focus()
        
        // focusInput method written from Child Component
        this.componentRef.current.focusInput()
    }
    render() {
        return (
            <div>
                {/* if u want direct focus without child we can use like this */}
                {/* <input type="text" ref={this.componentRef} /> */}



                { /* inputClassRef is a child component and i am rendering that component here */}
                <InputClassRef ref={this.componentRef}/>
                <button onClick={this.clickHandler}>Focus Input</button>
            </div>
        )
    }
}

export default FocusInput

// this is Parent Component