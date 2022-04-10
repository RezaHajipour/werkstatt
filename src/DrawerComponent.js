import React from "react";
import Drawer from "@material-ui/core/Drawer";
// import MenuIcon from "@material-ui/icons/Menu";

// import { NavLink as RouterLink } from "react-router-dom";
// import { Link } from "@material-ui/core";
// import { ReactComponent as Logo } from "./images/logo-a2.svg";
// import { makeStyles } from "@material-ui/core/styles";

import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
// import Button from "@material-ui/core/Button";

const DrawerComponent = ({ openDrawer, setOpenDrawer }) => {
    // const classes = useStyles();

    return (
        <Drawer anchor="right" open={openDrawer}>
            <ListItem onClick={() => setOpenDrawer(false)}>
                <ListItemText>item1</ListItemText>
            </ListItem>
            <ListItem onClick={() => setOpenDrawer(false)}>
                <ListItemText>item2</ListItemText>
            </ListItem>
            <ListItem onClick={() => setOpenDrawer(false)}>
                <ListItemText>item3</ListItemText>
            </ListItem>
        </Drawer>
    );
};
export default DrawerComponent;

//  <div className={classes.root}>
//      <Link component={RouterLink} to="/">
//          <Logo className={classes.img} />
//      </Link>
//      <MenuIcon className={classes.icon} />
//  </div>;

// const useStyles = makeStyles((theme) => ({
//     root: {
//         color: "black",
//         maxWidth: "100%",
//         backgroundColor: "rgb(0, 186, 212)",
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "space-around",
//         padding: ".2rem",
//     },
//     icon: {
//         width: "2.5rem",
//         height: "3rem",
//     },
//     img: {
//         width: "8.5rem",
//         height: "3.5rem",
//     },
// }));
