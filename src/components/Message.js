import React, { Component } from 'react';


class Message extends Component {
    constructor(props) {
        super(props)
        this.state = ({ // state object
            // this.state is use so it wil not points to windows object
            message: 'Welcome Visitor'
        })
    }

    changeMessage(){
        this.setState({
             message: 'Thank you for your visit'

            })
    }
    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button className="abcd" onClick= {() => this.changeMessage()}>Subscribe</button>
            </div>

        )
    }

}

export default Message