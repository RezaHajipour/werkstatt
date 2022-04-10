import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
// import NavBar from "./NavBar";
import Footer from "./Footer";
import CopyWrite from "./CopyWrite";
import Home from "./Home";
import Uber from "./Uber";
import Kontakt from "./Kontakt";
import Auspuff from "./Auspuff";
import Klimaanlagen from "./Klimaanlagen";
import Batterie from "./Batterie";
import Bremse from "./Bremse";
import Diagnose from "./Diagnose";
import Getriebe from "./Getriebe";
import Hu from "./Hu";
import Inspektion from "./Inspektion";
import Karosserie from "./Karosserie";
import Lenkrad from "./Lenkrad";
import Motor from "./Motor";
import Ol from "./Ol";
import Reifen from "./Reifen";
import Stossdampfer from "./Stossdampfer";
import Zundung from "./Zundung";
import Kupplung from "./Kupplung";
import NewNav from "./NewNav";

const App = () => {
    return (
        <BrowserRouter>
            <NewNav />
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
                <Route path="/klimaanlagen">
                    <Klimaanlagen />
                </Route>
                <Route path="/batterie">
                    <Batterie />
                </Route>
                <Route path="/bremse">
                    <Bremse />
                </Route>
                <Route path="/diagnose">
                    <Diagnose />
                </Route>
                <Route path="/getriebe">
                    <Getriebe />
                </Route>
                <Route path="/hu">
                    <Hu />
                </Route>
                <Route path="/inspektion">
                    <Inspektion />
                </Route>
                <Route path="/karosserie">
                    <Karosserie />
                </Route>
                <Route path="/kupplung">
                    <Kupplung />
                </Route>
                <Route path="/lenkrad">
                    <Lenkrad />
                </Route>
                <Route path="/motor">
                    <Motor />
                </Route>
                <Route path="/ol">
                    <Ol />
                </Route>
                <Route path="/reifen">
                    <Reifen />
                </Route>
                <Route path="/stossdampfer">
                    <Stossdampfer />
                </Route>
                <Route path="/zundung">
                    <Zundung />
                </Route>
                <Footer />
                <CopyWrite />
            </div>
        </BrowserRouter>
    );
};

export default App;
