import React, { Component } from 'react'
import ChildComponent from "./ChildComponent"

class ParentComponent extends Component {
    constructor(props) {
        super(props)
        this.greeetParent = this.greeetParent.bind(this)
        this.state = {
            parentName: 'Parent'
        }
    }

    greeetParent(childName) {
        alert(`Hello ${this.state.parentName} from ${childName}`)
    }

    render() {
        return (
            <div>
                {/*Passing value of props to ChildComponent with help of greetHandler, what parameters need to pass with function so we need to take value of greethandler of those props in child component  */}
                <ChildComponent greetHandler={this.greeetParent} />
            </div>
        )
    }
}

export default ParentComponent
