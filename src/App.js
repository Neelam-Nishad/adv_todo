import React from "react";
import './App.css';
import {Switch, Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";
import Dashboard from "./components/dashboard/Dashboard";
import Navigation from "./components/navigation/Navigation";

function App() {
  return (
    <div className="App col-md-8 mx-auto">
      <Navigation/>
      <Switch>
        <Route path="/signin" exact component={SignIn}/>
        <Route path="/signup" exact component={SignUp}/>
        <Route path="/" exact component={Dashboard}/>
      </Switch>
    </div>
  );
}

export default App;
