import * as React from 'react';
import './Header.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import autoOne from "./images/auto-1.png";
import autoTwo from "./images/auto-4.png";


export default function SimpleContainer() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container className="main">
        <br />
      {/* <img src={autoOne} className="auto" /> */}
      <p className="heroText">Ihre KFZ Werkstatt für alle Marken in Hamburg.
        Wir reparieren kompetent und fair!</p>
        <img src={autoOne} className="auto2" />
      </Container>
    </React.Fragment>
  );
}
