import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from "./File/Home";
import Login from "./File/components/Login/Login";
import About from "./File/components/About/About";
import Register from "./File/components/Register/Register";
import Form from "./File/Main Page/PersonalForm/Form";
import Mainpage from "./File/Main Page/Main";
import { Switch, Route, Redirect } from "react-router-dom";
import Forgetpassword from "./File/components/Login/Forgetpassword";
import AboutPage from "./File/Main Page/About/AboutPage";
import Verify from "./File/components/Register/Verify/Verify";
import Location from "./File/components/Login/Location/Location";
const App = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/forgetpassword" component={Forgetpassword} />
        <Route exact path="/main" component={Mainpage} />
        <Route exact path="/profile" component={Form} />
        <Route exact path="/main/about" component={AboutPage} />
        <Route exact path="/verify" component={Verify} />
        <Route exact path="/location" component={Location} />
        <Redirect to="/" />
      </Switch>
    </>
  );
};
export default App;
