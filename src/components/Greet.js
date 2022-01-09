import React from 'react';


// function Greet() {
//     return 
// }

// define function with arrow functions

const Greet = (props) => {
    // * 1st method of destructing in parameter
    // const Greet = ({name, heroName}) => {
    
    // here we destructure a,b from props
    
    //?  destructing from props in function component

    // * 2nd method of destructing in bodyu
    const { name, heroName } = props;

    // props.name = 'Greet';
    // error cz we cant modify or change props value
    // console.log(props);
    // () Needs to use this as we are splitting code in multiple lines
    return (
        <div>
            <h1>Hello {name} a.ka. {heroName}</h1>
            {/* {props.children} */}
        </div>
    )
}
export default Greet;
// this is export default allow us to import with any name
