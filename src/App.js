// import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
// import NameList from "./components/NameList";
// import Stylesheets from "./components/CssStyling/Stylesheets";
// import Inline from "./components/CssStyling/Inline";
// import Greet from "./components/Greet";
// import Welcome from "./components/Welcome";
// import Hello from "./components/Hello";
// import Message from "./components/Message";
// import Counter from "./components/Counter";
// import FunctionClick from "./components/FunctionClick";
// import ClassClick from "./components/ClassClick";
// import EventBind from "./components/EventBind";
// import ParentComponent from "./components/ParentComponent";
// import UserGreeting from "./components/UserGreeting";
import './appStyle.css'
import styles from './appStyles.module.css'
// import LifecycleA from "./components/LifecycleA";
// import FragmentDemo from "./components/Fragments/FragmentDemo";
import Table from "./components/Fragments/Table";
// import PureComp from "./components/PureComponents/PureComp";
import ParentCompo from "./components/PureComponents/ParentCompo";
import RefDemo from "./components/Ref/RefDemo";
import FocusInput from "./components/Ref/FocusInput";
import FRParentInput from "./components/Ref/FRParentInput";
import PortalDemo from "./components/PortalDemo";
// import RegComp from "./components/PureComponents/RegComp";


class App extends Component {
  render() {
    return (
      <div className="App">
        <PortalDemo />
        {/* <FRParentInput /> */}
        {/* <FocusInput /> */}
        {/* <RefDemo /> */}
        {/* <ParentCompo /> */}
        {/* <Table /> */}
        {/* <FragmentDemo /> */}
        {/* <LifecycleA /> */}
        {/* <h1 className="error">Error</h1> */}
        {/* <h1 className={styles.success}>Success</h1> */}
      {/* <Inline /> */}
        {/* <Stylesheets primary={true}/> */}
        {/* <NameList /> */}
        {/* <UserGreeting /> */}
        {/* <ParentComponent /> */}
        {/* <EventBind /> */}
        {/* <Counter /> */}
        {/* <Message /> */}
        {/* <FunctionClick /> 
        <ClassClick /> 
        <Welcome name="atul" heroName="b" /> 
        {/* 
        <Greet name="atul" heroName="b">
          <p>This is abcd props</p>
        </Greet>
        <Greet name="abcd" heroName="b" />
        <button>actions</button>
        <Greet name="xyzs" heroName="c" />
        <Welcome name="abcd" heroName="c" />
        <Welcome name="diana" heroName="d" />  */}
      </div>
    );
  }
}

export default App;
