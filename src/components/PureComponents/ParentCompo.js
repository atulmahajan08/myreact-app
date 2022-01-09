import React, { Component } from 'react'
import MemoComp from "./MemoComp"
import PureComp from "./PureComp"
import RegComp from "./RegComp"

class ParentCompo extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: 'Atul'
        }
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({
                name: 'Atulf'
            })
        }, 2000)
    }


    render() {
        console.log("**************************** ParenT");
        return (
            <div>
                Parent Component
                <MemoComp name={this.state.name}/>
                {/* <RegComp name={this.state.name}></RegComp>
                <PureComp name={this.state.name}></PureComp> */}
            </div>
        )
    }
}

export default ParentCompo
