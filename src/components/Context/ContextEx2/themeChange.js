import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";

// Plain empty context
// const RoomContext = React.createContext();

// const RoomProvider = RoomContext.Provider;
// const RoomConsumer = RoomContext.Consumer;

// A component whose sole job is to manage
// the state of the Room
class RoomStore extends React.Component {
  state = {
    isLit: true
  };

  toggleLight = () => {
    this.setState((state) => ({ isLit: !state.isLit }));
  };

  render() {
    console.log(this.state.isLit, "islit value");
    // Pass down the state and the onToggleLight action
    return (
      <RoomProvider
        value={{
          isLit: this.state.isLit,
          onToggleLight: this.toggleLight
        }}
      >
        {this.props.children}
      </RoomProvider>
    );
  }
}

// Receive the state of the light, and the function to
// toggle the light, from RoomContext
// const Room = () => (
//   <RoomConsumer>
//     {({ isLit, onToggleLight }) => (
//       <div className={`room ${isLit ? "lit" : "dark"}`}>
//         The room is {isLit ? "lit" : "dark"}.
//         <br />
//         <button onClick={onToggleLight}>Flip</button>
//       </div>
//     )}
//   </RoomConsumer>
// );

const App = () => (
  <div className="app">
    <Room />
  </div>
);

// Wrap the whole app in the RoomStore
// this would work just as well inside `App`
ReactDOM.render(
  <RoomStore>
    <App />
  </RoomStore>,
  document.querySelector("#root")
);


// app = compomet e
// room componet f

//https://codesandbox.io/s/trusting-cartwright-bjh2q?file=/src/index.js:0-1433