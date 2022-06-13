import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Box from "@material-ui/core/Box";
import { Link } from "@mui/material";

export default function CopyWrite() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static" style={{ background: "#221f1f" }}>
                <Toolbar className={classes.toolbar}>
                    <Box variant="h6" className={classes.title}>
                        {" "}
                        Design by @{" "}
                        <Link href="www.rezahajipour.com" underline="none">
                            REZA HAJIPOUR
                        </Link>
                    </Box>
                    <Box variant="h6" className={classes.title}>
                        <Link href="/impressum" underline="none">
                            IMPRESSUM
                        </Link>
                    </Box>
                </Toolbar>
            </AppBar>
        </div>
    );
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        justifyContent: "center",
        // flexDirection: "column",

        // width: "100%",
        // height: "5%",
    },
    title: {
        flexGrow: 1,
        justifyContent: "around",
    },
    title: {
        flexGrow: 1,
        color: "#FFFFFF",
        maxHeight: "0.07rem",
    },
}));
