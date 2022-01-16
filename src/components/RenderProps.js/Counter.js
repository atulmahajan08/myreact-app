import React, { Component } from 'react'

class Counter extends Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }

    incrementCount = () => {
        this.setState(prevState => {
            return { count: prevState.count + 1 }
        }, () => console.log('The name has updated and component re-rendered'))
    }

    render() {
        return (
            <div>
                {/* {this.props.render(this.state.count, this.incrementCount)} */}
                {/* Without using render and */}
                {this.props.children(this.state.count, this.incrementCount)}
                {/* Here we are taking props value count and incrememtn from app.js */}
                {/* With render props we are passing two methods count and increment, and same values of state we are passing to countertwo and hovercounter */}



            </div>
        )
    }
}

export default Counter
