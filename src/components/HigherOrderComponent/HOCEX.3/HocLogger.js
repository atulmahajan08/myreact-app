
// We then just use this Higher Order Component in our components that should be hidden from anonymous users:

// This example is described in more detail here.
//     Section 28.2: Simple Higher Order Component
// Let's say we want to console.log each time the component mounts:
// HocLogger.js
import React from 'react'


export default function higherOrderLogger(Component) {
    return class HocLogger extends React.Component {

        componentDidMount() {
            console.log('Hey, we are mounted!');
        }
        
        render() {
            return <Component {...this.props} />;
        }
    }
}



// Use this HOC in your code:

