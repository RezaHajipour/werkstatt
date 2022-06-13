import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Nav from "./Nav";
import Footer from "./Footer";
import CopyWrite from "./CopyWrite";
import Home from "./Home";
import Uber from "./Uber";
import Kontakt from "./Kontakt";
import Abgasanlage from "./Leistungen/Abgasanlage";
import Klimaanlagen from "./Leistungen/Klimaanlagen";
import Batterie from "./Leistungen/Batterie";
import Bremse from "./Leistungen/Bremse";
import Diagnose from "./Leistungen/Diagnose";
import Getriebe from "./Leistungen/Getriebe";
import Hu from "./Leistungen/Hu";
import Inspektion from "./Leistungen/Inspektion";
import Karosserie from "./Leistungen/Karosserie";
import Kupplung from "./Leistungen/Kupplung";
import Lenkrad from "./Leistungen/Lenkrad";
import Motor from "./Leistungen/Motor";
import Ol from "./Leistungen/Ol";
import Reifen from "./Leistungen/Reifen";
import Stossdampfer from "./Leistungen/Stossdampfer";
import Zundung from "./Leistungen/Zundung";
import Impressum from "./Leistungen/Impressum";

const App = () => {
    return (
        <BrowserRouter>
            <Nav />
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
                <Route path="/abgasanlage">
                    <Abgasanlage />
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
                <Route path="/impressum">
                    <Impressum />
                </Route>
                <Footer />
                <CopyWrite />
            </div>
        </BrowserRouter>
    );
};

export default App;
