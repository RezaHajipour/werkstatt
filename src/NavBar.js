import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Slide from '@material-ui/core/Slide';
import Header from "./Header";
import logoTwo from "./images/logo-a2.png";
import "./NavBar.css";
import Button from '@material-ui/core/Button';


function HideOnScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

const NavBar = (props) => {
  return (
    <React.Fragment>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar style={{ background: '#00bad4' }} >
          <Toolbar className="menu" >
            <img src={logoTwo} className="logo" />
            <div className="appBar">
            <Button color="inherit">Über uns</Button>
            <Button color="inherit">Leistungen</Button>
            <Button color="inherit"> Kontakt</Button>
            <Button color="inherit">Anfahrt</Button>
            </div>
            {/* <img src={logoTwo} className="logo" /> */}
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
      <Container>
        <Box sx={{ my: 2 }}>
              <Header />,
             
        </Box>
      </Container>
    </React.Fragment>
  );
}
export default NavBar;