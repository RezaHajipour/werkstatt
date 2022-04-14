import React, { useState, useRef } from "react";
import { NavLink as RouterLink } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import {
    AppBar,
    Toolbar,
    Box,
    MenuList,
    Link,
    MenuItem,
    Hidden,
    IconButton,
    Menu,
    Button,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { ReactComponent as Logo } from "./images/logo-a2.svg";

const Nav = () => {
    const classes = useStyles();
    const [isOpen, setIsOpen] = useState(false);
    const menu = useRef();

    const handleOpenMenu = (e) => {
        setIsOpen(!isOpen);
    };

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const [anchorEl, setAnchorEl] = React.useState(null);
    return (
        <Box ref={menu}>
            <AppBar className={classes.root} position="static">
                <Box className={classes.mobileContainer}>
                    {/* mobile nav */}
                    <Hidden smUp>
                        <Link component={RouterLink} to="/">
                            <Logo className={classes.mobileLogo} />
                        </Link>
                        <IconButton color="inherit" onClick={handleOpenMenu}>
                            <MenuIcon className={classes.menuIcon} />
                        </IconButton>
                        <Menu
                            open={isOpen}
                            anchorEl={menu.current}
                            onClose={handleOpenMenu}
                            className={classes.mobileMenu}
                        >
                            <MenuItem>
                                <RouterLink
                                    to="/Uber"
                                    activeClassName={classes.navLink}
                                    className={classes.mobileList}
                                >
                                    ÜBER UNS
                                </RouterLink>
                            </MenuItem>
                            <MenuItem>
                                <RouterLink
                                    to="/Kontakt"
                                    activeClassName={classes.navLink}
                                    className={classes.mobileList}
                                >
                                    KONTAKT
                                </RouterLink>
                            </MenuItem>
                            <MenuItem>
                                <RouterLink
                                    to="/Auspuff"
                                    activeClassName={classes.navLink}
                                    className={classes.mobileList}
                                >
                                    Auspuff
                                </RouterLink>
                            </MenuItem>
                            <MenuItem>
                                <RouterLink
                                    to="/Batterie"
                                    activeClassName={classes.navLink}
                                    className={classes.mobileList}
                                >
                                    Batterie
                                </RouterLink>
                            </MenuItem>
                            <MenuItem>
                                <RouterLink
                                    to="/Bremse"
                                    activeClassName={classes.navLink}
                                    className={classes.mobileList}
                                >
                                    Bremse
                                </RouterLink>
                            </MenuItem>
                            <MenuItem>
                                <RouterLink
                                    to="/Diagnose"
                                    activeClassName={classes.navLink}
                                    className={classes.mobileList}
                                >
                                    Diagnose
                                </RouterLink>
                            </MenuItem>
                            <MenuItem>
                                <RouterLink
                                    to="/Getriebe"
                                    activeClassName={classes.navLink}
                                    className={classes.mobileList}
                                >
                                    Getriebe
                                </RouterLink>
                            </MenuItem>
                            <MenuItem>
                                <RouterLink
                                    to="/Hu"
                                    activeClassName={classes.navLink}
                                    className={classes.mobileList}
                                >
                                    HU & AU
                                </RouterLink>
                            </MenuItem>
                            <MenuItem>
                                <RouterLink
                                    to="/Inspektion"
                                    activeClassName={classes.navLink}
                                    className={classes.mobileList}
                                >
                                    Inspektion
                                </RouterLink>
                            </MenuItem>
                            <MenuItem>
                                <RouterLink
                                    to="/Karosserie"
                                    activeClassName={classes.navLink}
                                    className={classes.mobileList}
                                >
                                    Karosserie
                                </RouterLink>
                            </MenuItem>
                            <MenuItem>
                                <RouterLink
                                    to="/Klimaanlagen"
                                    activeClassName={classes.navLink}
                                    className={classes.mobileList}
                                >
                                    Klimaanlagen
                                </RouterLink>
                            </MenuItem>
                            <MenuItem>
                                <RouterLink
                                    to="/Kupplung"
                                    activeClassName={classes.navLink}
                                    className={classes.mobileList}
                                >
                                    Kupplung
                                </RouterLink>
                            </MenuItem>
                            <MenuItem>
                                <RouterLink
                                    to="/Lenkrad"
                                    activeClassName={classes.navLink}
                                    className={classes.mobileList}
                                >
                                    Lenkrad
                                </RouterLink>
                            </MenuItem>
                            <MenuItem>
                                <RouterLink
                                    to="/Motor"
                                    activeClassName={classes.navLink}
                                    className={classes.mobileList}
                                >
                                    Motor
                                </RouterLink>
                            </MenuItem>
                            <MenuItem>
                                <RouterLink
                                    to="/Ol"
                                    activeClassName={classes.navLink}
                                    className={classes.mobileList}
                                >
                                    Öl
                                </RouterLink>
                            </MenuItem>
                            <MenuItem>
                                <RouterLink
                                    to="/Reifen"
                                    activeClassName={classes.navLink}
                                    className={classes.mobileList}
                                >
                                    Räder & Reifen
                                </RouterLink>
                            </MenuItem>
                            <MenuItem>
                                <RouterLink
                                    to="/Stossdampfer"
                                    activeClassName={classes.navLink}
                                    className={classes.mobileList}
                                >
                                    Stoßdämpfer
                                </RouterLink>
                            </MenuItem>
                            <MenuItem>
                                <RouterLink
                                    to="/Zundung"
                                    activeClassName={classes.navLink}
                                    className={classes.mobileList}
                                >
                                    Zündung
                                </RouterLink>
                            </MenuItem>
                        </Menu>
                    </Hidden>
                    {/* TODO <Typography variant="subtitle1">EN | DE</Typography> */}
                </Box>
                {/* desktop / tablet  nav */}
                <Toolbar className={classes.toolbar}>
                    {/* Logo  */}

                    <Hidden xsDown>
                        <Link component={RouterLink} to="/">
                            <Logo className={classes.desktopLogo} />
                        </Link>

                        <MenuList
                            className={classes.desktopContainer}
                            disableListWrap
                        >
                            <MenuItem>
                                <Button
                                    color="inherit"
                                    aria-controls="simple-menu"
                                    aria-haspopup="true"
                                    onClick={handleClick}
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
                                        Zündung
                                    </MenuItem>
                                </Menu>
                            </MenuItem>
                            <MenuItem>
                                <RouterLink
                                    to="/Uber"
                                    activeClassName={classes.navLink}
                                    className={classes.title}
                                >
                                    ÜBER UNS
                                </RouterLink>
                            </MenuItem>
                            <MenuItem>
                                <RouterLink
                                    to="/Kontakt"
                                    activeClassName={classes.navLink}
                                    className={classes.title}
                                >
                                    KONTAKT
                                </RouterLink>
                            </MenuItem>
                        </MenuList>
                    </Hidden>
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Nav;

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: "rgb(0, 186, 212)",
        boxShadow: "none",
        padding: ".5rem 0",
        "& a": {
            color: "#ffffff",
            textDecoration: "none",
        },
        [theme.breakpoints.down("xs")]: { height: "7rem" },
    },

    toolbar: {
        display: "flex",
        justifyContent: "space-between",
        width: "100%",
    },
    desktopContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        width: "40%",
        outline: "none",
    },
    mobileContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        [theme.breakpoints.down("xs")]: { padding: "1rem" },
    },
    mobileLogo: {
        width: "50%",
        height: "5%",
    },

    menuIcon: {
        width: "4rem",
        height: "3.5rem",
    },

    [theme.breakpoints.down("xs")]: {},

    desktopLogo: {
        width: "30%",
        height: "2%",
    },

    [theme.breakpoints.up("sm")]: {},
    mobileMenu: {
        "& ul": {
            backgroundColor: "#61dafb",
            color: " yellow",
            padding: "0",
            width: "100vh",
        },
        "& a": {
            fontWeight: 700,
        },
    },
    mobileList: {
        textDecoration: "none",
    },
    navLink: {
        color: "#d75f5f !important",
    },
}));
