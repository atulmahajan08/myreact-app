import React from 'react';

const Hello = () => {
    // return (
         <div className="h1"></div>
    //         <h1>Hello AtulM</h1>
    //     </div>
    // )

    //Without JSX
    return React.createElement(
        'div',
        {id: 'hello', className: 'container'},
        React.createElement('h1', null, 'Hello atasdul')
    )
}

export default Hello