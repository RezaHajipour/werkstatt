import React from "react";
import { makeStyles, Grid, Card, CardContent, Link } from "@material-ui/core";
import { NavLink as RouterLink } from "react-router-dom";

export default function CopyWrite() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container className={classes.root}>
                <Card className={classes.card}>
                    <CardContent>
                        {" "}
                        Design by @{" "}
                        <a
                            href="https://www.rezahajipour.com/"
                            target="_blank"
                            rel="noreferrer"
                            className={classes.copywrite}
                        >
                            REZA HAJIPOUR
                        </a>
                    </CardContent>{" "}
                </Card>
                <Card className={classes.card}>
                    <CardContent>
                        {" "}
                        <Link
                            component={RouterLink}
                            to="/impressum"
                            className={classes.copywrite}
                        >
                            IMPRESSUM
                        </Link>
                    </CardContent>{" "}
                </Card>
            </Grid>
        </div>
    );
}

//----------------Material-ui Styles----------------------

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        justifyContent: "space-around",
        alignItems: "flex-start",
        textAlign: "center",
        flexBasis: "0%",
        backgroundColor: "#221f1f",
        boxShadow: "0",
    },

    card: {
        maxWidth: 400,
        maxHeight: 300,
        backgroundColor: "#221f1f",
        boxShadow: "none",
        color: "#FFFFFF",
    },
    copywrite: {
        underline: "none",
        color: "#757ce8",
        textDecoration: "none",
        "&:hover": {
            underline: "none",
            color: "#FFFFFF",
            textDecoration: "none",
        },
    },
}));
