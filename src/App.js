import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";
import CopyWrite from "./CopyWrite";
import Home from "./Home";
import Uber from "./Uber";
import Kontakt from "./Kontakt";
import Auspuff from "./Auspuff";

const App = () => {
    return (
        <BrowserRouter>
            <NavBar />
            <div>
                <Route path="/" exact>
                    <Home />
                </Route>
                <Route path="/uber">
                    <Uber />
                </Route>
                <Route path="/kontakt">
                    <Kontakt />
                </Route>
                <Route path="/auspuff">
                    <Auspuff />
                </Route>
                <Footer />
                <CopyWrite />
            </div>
        </BrowserRouter>
    );
};

export default App;
