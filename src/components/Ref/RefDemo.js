import React, { Component } from 'react'

class RefDemo extends Component {
    constructor(props) {
        super(props)
        //1st method
        // this.inputRef = React.createRef()

        // second metod
        this.cbRef = null;
        this.setCbRef = element => {
            this.cbRef = element
        }
    }

    componentDidMount() {
        if (this.cbRef) {
            this.cbRef.focus()
        }
        // this.inputRef.current.focus()
        // console.log(this.inputRef);
    }

    clickHandler = () => {
        alert(this.inputRef.current.value)
    }

    render() {
        return (
            <div>
                {/* <input type="text" ref={this.setCbRef} /> */}
                <input type="text" ref={this.setCbRef} />
                <button onClick={this.clickHandler}>Click</button>
            </div>
        )
    }
}

export default RefDemo
