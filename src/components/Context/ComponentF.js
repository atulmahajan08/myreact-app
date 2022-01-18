import React, { Component } from 'react'
import { UserConsumer } from "./userContext"

class ComponentF extends Component {
    render() {
        console.log("abcd");
        return (
            <UserConsumer>
                {username => {
                   return <div>Hello {username}</div>
                }}
            </UserConsumer>
            
        )
    }
}

export default ComponentF
