import React, { Component } from 'react'

class UserGreeting extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isLoggedIn: true
        }
    }

    render() {
        /* 1st method */
        // if (this.state.isLoggedIn) {
        //     return (
        //         <div> Welcome Atul</div>
        //     )
        // } else {
        //     return (
        //         <div> Welcome Guest</div>
        //     )
        // }
    
        /* 2nd Method */
        // let message;
        // if(this.state.isLoggedIn) {
        //     message = <div>Welcome Atul</div>
        // } else {
        //     message = <div>Welcome Guest</div>
        // }
        // return <div>{message}</div>
        
        /* 3nd Method  Conditional Approach*/
        // return (
        // <div>
        // {this.state.isLoggedIn ? 
        // <div>Welcome Atul</div> :
        // <div>Welcome Guest</div> }
        // </div>
        // )

        
        /* 4th Method Ternary Operator Conditional Approach*/
        //Here if condition is tru then only it Will show jsx
        return ( 
            this.state.isLoggedIn && <div>Welcome Atul</div> 
        )
    }
}

export default UserGreeting
