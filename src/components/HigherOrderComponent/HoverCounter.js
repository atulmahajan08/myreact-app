import React, { Component } from 'react'
import withCounter from "./WithCounter"

class HoverCounter extends Component {

    render() {
        const { count, incrementCount, clickHandler } = this.props;

        return (
            <div>
                <h2 onMouseOver={incrementCount}> {this.props.name} Hovered {count} times</h2>
                <button onClick={clickHandler}>Reset</button>
            </div>
        )
    }
}

export default withCounter(HoverCounter)

// we have passed incrementNumber value is 10, so hover will increment by 10x
// export default withCounter(HoverCounter, 10)
