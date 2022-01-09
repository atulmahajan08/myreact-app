import React, { Component } from 'react'

class Counter extends Component {
    constructor(props) {
        super(props)
        this.state = { // state object
            // this.state is use so it wil not points to windows object
            count: 0
        }
    }

    // increment() {
    //     // this.setState({
    //     //     count: this.state.count + 1
    //     //     // count : count++
    //     // }, () => {
    //     //     console.log('callback value', this.state.count)
    //     // })
    //     // // synchrnous because it is executed before count+1
    //     // console.log(this.state.count)

    //     this.setState((prevState, props) => ({
    //         count: prevState.count + 1 + props.addValue
    //     }))
    //     console.log(this.state.count)

    // }
    // incrementFive() {
    //     this.increment();
    //     this.increment();
    //     this.increment();
    //     this.increment();
    //     this.increment();
    // }


    incrementHandler() {
        // setCount(count + 1);
        this.setState({
            count: this.state.count + 1
            //     // count : count++
        })
    }
    decrementHandler() {
        // setCount(count - 1);
        this.setState({
            count: this.state.count - 1
            //     // count : count++
        })
    }
    resetHandler() {
        this.setState({
            count: 0
            //     // count : count++
        })
        // setCount(0);
    }
    render() {
        return (
            <div className="App">
                 <h2> Count: {this.state.count} </h2>
                 <button id="inc" onClick={() => this.incrementHandler()}>
                    Increment{" "}
                </button>
                <button id="dec" onClick={() =>  this.decrementHandler()}>
                    decrement{" "}
                </button>
                <button id="res" onClick={() =>  this.resetHandler()}>
                    Reset
                </button> 
                {/* <button onClick={() => this.incrementFive()
                }>Increment</button> */}
            </div>
        )
    }
}

export default Counter;
