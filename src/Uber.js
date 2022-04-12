import React from "react";
import { makeStyles, Typography } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import CardMedia from "@material-ui/core/CardMedia";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import image from "./images/auto-b1.png";

function Uber() {
    const classes = useStyles();
    return (
        <Grid container className={classes.root}>
            <Card className={classes.card1}>
                <CardMedia className={classes.media} image={image} />
            </Card>

            <Card className={classes.card2}>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h4">
                        ÜBER UNS
                    </Typography>
                    <Typography>
                        Unsere Werkstatt ist Fachgerecht ausgestattet, so dass
                        alle Reperaturen und Dienstleistungen schnell und zur
                        Kundenzufriedenheit geleistet werden können. So können
                        aufgrund drei Hebebühnen mehrere Reperaturen
                        gleichzeitig von unserem Team verrichtet werden ohne das
                        lange Wartezeiten aufkommen. Auch die Reperaturen von
                        Lastwagen stellen aufgrund einer Arbeitsgrube kein
                        Problem für uns dar. Des Weiteren ist unsere Werkstatt
                        mit einem Klimaanlagen-Service ausgestattet und wir
                        führen außerdem Computergesteuerte Diagnosetests durch,
                        um innerhalb kürzester Zeit die Fehler an Ihrem Wagen
                        ausfindig machen zu können.
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
    );
}

export default Uber;

//----------------Material-ui----------------------

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap",
        [theme.breakpoints.down("xs")]: {
            flexDirection: "column",
        },
    },

    typography: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    card1: {
        height: "62.95vh",
        width: "40vw",
        boxShadow: "none",
        // backgroundColor: "#fafafa",
        [theme.breakpoints.down("xs")]: {
            height: "50vh",
            width: "100vw",
        },
    },
    card2: {
        width: "40vw",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "none",
        // backgroundColor: "#fafafa",
        [theme.breakpoints.down("xs")]: {
            height: "60vh",
            width: "100vw",
        },
    },
    media: {
        // height: "80vh",
        // width: "50vh",
        padding: theme.spacing(1),
        paddingTop: "86.25%", // 16:9
    },
}));
