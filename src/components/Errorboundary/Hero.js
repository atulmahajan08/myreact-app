import React from 'react'

function Hero({heroName}) { // heroName as a props
    if(heroName === 'joker'){
        throw new Error('not a hero')
    }
    return (
        <div>
            {heroName}
        </div>
    )
}

export default Hero
