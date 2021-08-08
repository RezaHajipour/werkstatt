import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";
import CopyWrite from "./CopyWrite";
import Home from "./Home";
import Uber from "./Uber";



const App = () => {
  return <BrowserRouter>
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/uber" component={Uber} />
      </Switch>
      <Footer />
      <CopyWrite />
  </div>
  </BrowserRouter>;

}

export default App;
