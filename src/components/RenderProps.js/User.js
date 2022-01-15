import React, { Component } from 'react'

class User extends Component {
    render() {
        return (
            <div>
              {this.props.render(false)}
              {/* render prop is coming from app.js where
              we are passing render prop with value as function */}
            </div>
        )
    }
}

export default User
