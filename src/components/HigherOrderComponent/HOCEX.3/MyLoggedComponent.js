
import React from "react";
import  higherOrderLogger  from "./HocLogger";


class MyLoggedComponent extends React.Component {

    render() {
        return (
            <div>
                This component gets logged to console on each mount.
            </div>
        );
    }
}

// Now wrap MyLoggedComponent with the HocLogger function
export default higherOrderLogger(MyLoggedComponent);