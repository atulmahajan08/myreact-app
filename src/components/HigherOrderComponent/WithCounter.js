import React from 'react'

const withCounter =(WrappedComponent) => {
    
    // can pass parameters to HOC Component
    // const withCounter =(WrappedComponent, incrementNumber) => {


    class withCounter extends React.Component {
        constructor(props) {
            super(props)
        
            this.state = {
                 count: 0
            }
        }
    
        incrementCount = () => {
            this.setState(prevState => {
                return { count: prevState.count + 1 }
                
                // number will be the provided arguments
                // return { count: prevState.count + incrementNumber } 
            })
        }

        clickHandler = () => {
            this.setState({
                count: 0
            })
        }

        render() {
            console.log("props value", this.props);
            return ( 
            <WrappedComponent count={this.state.count} incrementCount={this.incrementCount} clickHandler={this.clickHandler} {...this.props}/>
            )
        }
    }
    return withCounter
}

export default withCounter


// React HOC example with Hooks

// https://codesandbox.io/s/higher-order-components-and-react-hooks-wby4w?file=/src/withDataFetching.jsx