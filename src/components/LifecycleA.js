import React, { Component } from 'react'
import LifecycleB from "./LifecycleB";

class LifecycleA extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
           name: 'Atul'  
        }
        console.log('ATUL Constructor');
    }

    static getDerivedStateFromProps(props, state) {
        console.log('ATUL getDerivedStateFromProps')
        return null
    }

    componentDidMount() {
        console.log('ATUL componentDidMount')
    }
    
    shouldComponentUpdate() {
        console.log('ATUL shouldComponentUpdate')
        return true
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
    console.log('ATUL getSnapshotBeforeUpdate')
    return null
    }

    componentDidUpdate() {
        console.log('ATUL componentDidUpdate')
    }

    changState = () => {
        setTimeout(() => {
        this.setState({
            name: 'codeEvaoluation'
        })
        }, 1000)
    }

    render() {
        console.log('ATUL render')
        return (
            <div>
               <div>ATUL</div>
               <button onClick={this.changState}>Change State</button>
            <LifecycleB />
            </div>
        )
    }
}

export default LifecycleA
