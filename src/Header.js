import * as React from "react";

import {
    makeStyles,
    Typography,
    Card,
    CardContent,
    CardMedia,
    Grid,
} from "@material-ui/core";
import autoOne from "./images/auto-1.png";

export default function SimpleContainer() {
    const classes = useStyles();
    return (
        <Grid container className={classes.root}>
            <Card className={classes.card1}>
                <CardContent>
                    <Typography
                        variant="h5"
                        component="h2"
                        className={classes.title}
                    >
                        IHRE KFZ WERKSTATT FÜR ALLE MARKEN IN HAMBURG.
                        <br />
                        WIR REPARIEREN KOMPETENT UND FAIR!
                    </Typography>
                </CardContent>
            </Card>
            <Card className={classes.card2}>
                <CardContent>
                    <CardMedia className={classes.media} image={autoOne} />
                </CardContent>
            </Card>
        </Grid>
    );
}

//----------------Material-ui----------------------

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        flexDirection: "column",
        flexBasis: "0%",
        boxShadow: "0",
    },
    title: {
        color: "black",
        fontSize: "22px",
        letterSpacing: ".5px",
        [theme.breakpoints.down("xs")]: {
            fontSize: [10, "!important"],
        },
    },
    card1: {
        backgroundColor: "rgba(250, 250, 250)",
        boxShadow: "none",
        [theme.breakpoints.down("xs")]: {
            // maxWidth: "90%",
        },
    },
    card2: {
        width: "30%",
        backgroundColor: "rgba(250, 250, 250)",
        boxShadow: "none",
        [theme.breakpoints.down("xs")]: {
            width: "70%",
        },
    },
    media: {
        padding: theme.spacing(1),
        paddingTop: "60%", // 16:9
        [theme.breakpoints.down("xs")]: {
            paddingTop: "65%",
        },
    },

    typography: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
}));
