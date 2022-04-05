import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        justifyContent: "between",
        flexDirection: "column",
        width: "100%",
        height: "5%",
    },

    title: {
        flexGrow: 1,
        color: "#FFFFFF",
        maxHeight: "0.07rem",
    },
}));

export default function CopyWrite() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static" style={{ background: "#221f1f" }}>
                <Toolbar>
                    <Box variant="h6" className={classes.title}>
                        Designed by @ REZA HAJIPOUR
                    </Box>
                </Toolbar>
            </AppBar>
        </div>
    );
}
