import React, { Component } from 'react'
import {requireAuthentication} from './AuthenticatedComponent'


class MyPrivateComponent extends Component {
  
    render() {
        return (
            <div>
                My secret search, that is only viewable by authenticated users.
            </div>
        );
    }
}

// Now wrap MyPrivateComponent with the requireAuthentication function
export default requireAuthentication(MyPrivateComponent)