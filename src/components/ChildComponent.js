import React from 'react'

function ChildComponent(props) {
    return (
        <div>
            {/* Here onclick event we are taking props value from greethandler */}

            {/* we use props due to functional components */}
            <button onClick={() => props.greetHandler('child')}>GreetParent</button>
        </div>
    )
}

export default ChildComponent

// import React, { Component } from 'react'

// class ChildComponent extends Component {
//     render() {
//         return (
//             <div>
//                 {/* Here onclick event we are taking props value from greethandler */}

//                 {/* we use this.props due to Class components */}
//                 <button onClick={this.props.greetHandler}>GreetParent</button>
//             </div>
//         )
//     }
// }

// export default ChildComponent

