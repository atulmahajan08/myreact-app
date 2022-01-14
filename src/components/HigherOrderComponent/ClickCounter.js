import React, { Component } from 'react'
import withCounter from "./WithCounter"

class ClickCounter extends Component {
        
    render() {
        const {count, incrementCount} = this.props
        return <button className="counter" onClick={incrementCount}> {this.props.name} Clicked {count} times</button>
    }
}

export default withCounter(ClickCounter)

// we have passed incrementNumber value is 5, so hover will increment by 5x
// export default withCounter(ClickCounter, 5)
