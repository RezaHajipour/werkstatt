import * as React from "react";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import CssBaseline from "@material-ui/core/CssBaseline";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Slide from "@material-ui/core/Slide";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { NavLink as RouterLink } from "react-router-dom";
import { Link } from "@material-ui/core";
import { ReactComponent as Logo } from "./images/logo-a2.svg";

const NavBar = (props) => {
    const classes = useStyles();

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <React.Fragment>
            <CssBaseline />
            <HideOnScroll {...props}>
                <AppBar
                    style={{ background: "#00bad4" }}
                    className={classes.menu}
                >
                    <Toolbar className={classes.menu}>
                        <Link
                            component={RouterLink}
                            to="/"
                            className={classes.middle}
                        >
                            <Logo className={classes.logo} />
                        </Link>

                        <div className={classes.appBar}>
                            <Button
                                color="inherit"
                                aria-controls="simple-menu"
                                aria-haspopup="true"
                                onClick={handleClick}
                                className={classes.navTitle}
                            >
                                Leistungen
                            </Button>
                            <Menu
                                id="simple-menu"
                                anchorEl={anchorEl}
                                keepMounted
                                open={Boolean(anchorEl)}
                                onClose={handleClose}
                            >
                                <MenuItem
                                    onClick={handleClose}
                                    component={RouterLink}
                                    to="/auspuff"
                                >
                                    Auspuff
                                </MenuItem>

                                <MenuItem
                                    onClick={handleClose}
                                    component={RouterLink}
                                    to="/batterie"
                                >
                                    Batterie
                                </MenuItem>

                                <MenuItem
                                    onClick={handleClose}
                                    component={RouterLink}
                                    to="/bremse"
                                >
                                    Bremse
                                </MenuItem>

                                <MenuItem
                                    onClick={handleClose}
                                    component={RouterLink}
                                    to="/diagnose"
                                >
                                    Diagnose
                                </MenuItem>

                                <MenuItem
                                    onClick={handleClose}
                                    component={RouterLink}
                                    to="/getriebe"
                                >
                                    Getriebe
                                </MenuItem>

                                <MenuItem
                                    onClick={handleClose}
                                    component={RouterLink}
                                    to="/hu"
                                >
                                    HU / AU
                                </MenuItem>

                                <MenuItem
                                    onClick={handleClose}
                                    component={RouterLink}
                                    to="/inspektion"
                                >
                                    Inspektion
                                </MenuItem>

                                <MenuItem
                                    onClick={handleClose}
                                    component={RouterLink}
                                    to="/karosserie"
                                >
                                    Karosserie
                                </MenuItem>

                                <MenuItem
                                    onClick={handleClose}
                                    component={RouterLink}
                                    to="/klimaanlagen"
                                >
                                    Klimaanlagen
                                </MenuItem>
                                <MenuItem
                                    onClick={handleClose}
                                    component={RouterLink}
                                    to="/kupplung"
                                >
                                    Kupplung
                                </MenuItem>

                                <MenuItem
                                    onClick={handleClose}
                                    component={RouterLink}
                                    to="/lenkrad"
                                >
                                    Lenkrad
                                </MenuItem>

                                <MenuItem
                                    onClick={handleClose}
                                    component={RouterLink}
                                    to="/motor"
                                >
                                    Motor
                                </MenuItem>

                                <MenuItem
                                    onClick={handleClose}
                                    component={RouterLink}
                                    to="/ol"
                                >
                                    Öl
                                </MenuItem>

                                <MenuItem
                                    onClick={handleClose}
                                    component={RouterLink}
                                    to="/reifen"
                                >
                                    Räder & Reifen
                                </MenuItem>

                                <MenuItem
                                    onClick={handleClose}
                                    component={RouterLink}
                                    to="/stossdampfer"
                                >
                                    Stoßdämpfer
                                </MenuItem>

                                <MenuItem
                                    onClick={handleClose}
                                    component={RouterLink}
                                    to="/zundung"
                                >
                                    Zundung
                                </MenuItem>
                            </Menu>
                            <Link
                                component={RouterLink}
                                to="/uber"
                                color="inherit"
                                className={classes.navTitle}
                                style={{ textDecoration: "none" }}
                            >
                                ÜBER UNS
                            </Link>

                            <Link
                                component={RouterLink}
                                to="/kontakt"
                                color="inherit"
                                className={classes.navTitle}
                                style={{ textDecoration: "none" }}
                            >
                                KONTAKT
                            </Link>
                        </div>
                    </Toolbar>
                </AppBar>
            </HideOnScroll>
            <Toolbar />
            <Container>
                <Box sx={{ my: 2 }}>{/* <Header />, */}</Box>
            </Container>
        </React.Fragment>
    );
};
export default NavBar;

//----------------Material-ui----------------------

const HideOnScroll = (props) => {
    const { children, window } = props;

    const trigger = useScrollTrigger({
        target: window ? window() : undefined,
    });

    return (
        <Slide appear={false} direction="down" in={!trigger}>
            {children}
        </Slide>
    );
};

HideOnScroll.propTypes = {
    children: PropTypes.element.isRequired,
    window: PropTypes.func,
};
//==============================

const useStyles = makeStyles((theme) => ({
    root: {
        color: "black",
        maxWidth: "100%",
    },
    menu: {
        marginTop: "0 rem",
        marginBottom: "0.5rem",
    },

    middle: {
        display: "flex",
        justifyContent: "center",
        width: "20%",
    },
    // [theme.breakpoints.down('xs')]: {
    //   middle: {
    //     width: '100%',
    //   },
    // },
    logo: {
        paddingTop: "0.5rem",
        paddingBottom: "0.5rem",
        height: "60%",
        width: "60%",
    },

    appBar: {
        display: "flex",
        flexDirection: "row",
        flexGrow: 10,
        justifyContent: "space-around",
        justifyItems: "right",
        alignItems: "center",
    },
    navTitle: {
        fontSize: 16,
        letterSpacing: 3,
        textDecoration: "none",
    },
}));
