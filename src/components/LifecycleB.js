import React, { Component } from 'react'

class LifecycleB extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
           name: 'Atul'  
        }
        console.log('Vikky Constructor');
    }

    static getDerivedStateFromProps(props, state) {
        console.log('Vikky getDerivedStateFromProps')
        return null
    }

    componentDidMount() {
        console.log('Vikky componentDidMount')
    }
    
    shouldComponentUpdate() {
        console.log('Vikky shouldComponentUpdate')
        return true
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
    console.log('Vikky getSnapshotBeforeUpdate')
    return null
    }

    componentDidUpdate() {
        console.log('Vikky componentDidUpdate')
    }


    render() {
        console.log('Vikky render')
        return (
            <div>Lifecycle B</div>
        )
    }
}

export default LifecycleB
