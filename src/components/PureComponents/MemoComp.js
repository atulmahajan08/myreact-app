import React from 'react'

function MemoComp({name}) {
    console.log('Rendering Memo');
    return (
        <div>
            {name}
        </div>
    )
}

export default React.memo(MemoComp)

// it is usded in functional components
// just like opposite of Pure components