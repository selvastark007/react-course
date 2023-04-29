import logo from "./logo.svg";
import "./App.css";
import Statehook from "./components/Statehook";
import Practice from "./components/pratice/Practice";
// import FromValidation from './components/Form-validation/FromValidation';
import Search from "./components/pratice/Search";
// import Props from './components/pratice/Welcome';
import Welcome from "./components/pratice/Welcome";
import Classcomp from "./components/pratice/Classcomp";
import Hook from "./components/pratice/Hook";
import Eventbind from "./components/pratice/Eventbind";
import ParentEvent from "./components/pratice/ParentEvent";
import UserGreetings from "./components/pratice/UserGreetings";
import Onchange from "./components/pratice/Onchange";
import Namelist from "./components/pratice/Namelist";
import FormHandler from "./components/pratice/FormHandler";
import Header from "./components/HeaderBootstarp/Header";
import SideNavbar from "./components/sideNavBar/SideNavBar";
import User from "./components/pratice/User";

// react router
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'

// pages
import Home from './components/pages/Home'
import UseEffect from "./components/pratice/UseEffect";
import MouseEventUseEffect from "./components/pratice/MouseEventUseEffect";
import MouseContainer from "./components/pratice/MouseContainer";
import IntervelHookCounter from "./components/pratice/IntervelHookCounter";
import DataFetching from "./components/pratice/DataFetching";
import React from "react";
import ComponetC from "./components/pratice/useContext/ComponetC";
import ComponentF from "./components/pratice/useContext/ComponentF";

// useContext
 export const UserContext = React.createContext()

function App() {
  return (
    <div className="App">
      {/* <FromValidation/> */}
      {/* <Practice/> */}
      {/* <Search/> */}
      {/* <Welcome name = 'selva'> <p>hello</p> </Welcome>
   <Welcome name = 'jithu'> <button>hi i am button</button></Welcome> */}
      {/* <Welcome/> */}
      {/* <Classcomp name = 'athi'/> */}
      {/* <Hook/> */}
      {/* <Eventbind/> */}
      {/* <ParentEvent /> */}
      {/* <UserGreetings/> */}
      {/* <Onchange/> */}
      {/* <Namelist/> */}
      {/* <FormHandler/> */}
      {/* <Header/> */}
      {/* <SideNavbar/> */}
      {/* <User name={(isLoggedIn)=> isLoggedIn ? 'Selva' : 'Guest'}/> */}
      {/* <Header/> */}
      {/* <UseEffect/> */}
      {/* <MouseEventUseEffect/> */}
      {/* <MouseContainer/> */}
      {/* <IntervelHookCounter/> */}
      {/* <DataFetching/> */}
      <UserContext.Provider value={'selva'}>
        <ComponetC/>
      </UserContext.Provider>
     
      
    </div>
  );
}

export default App;
