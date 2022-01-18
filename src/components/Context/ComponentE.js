import React, { Component } from 'react'
import ComponentF from "./ComponentF"
import userContext from "./userContext"

class ComponentE extends Component {

    static contextType = userContext
    render() {
        return (
            <div>
                Component E context {this.context}
                <ComponentF />
            </div>
        )
    }
}

// ComponentE.contextType = userContext

export default ComponentE
