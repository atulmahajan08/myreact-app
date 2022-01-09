import React, { PureComponent } from 'react'

class PureComp extends PureComponent {

    // shouldComponentUpdate(){
    //     return false
    // }
    render() {
        console.log("Pure Component rendered");
        return (
            <div>
             Pure Component {this.props.name}
            </div>
        )
    }
}

export default PureComp
 