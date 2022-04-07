import React from "react";
import { makeStyles, Typography } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import CardMedia from "@material-ui/core/CardMedia";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import image from "./images/back-Karosserie.jpeg";

function Karosserie() {
    const classes = useStyles();
    return (
        <section>
            <Grid container className={classes.root}>
                <Card className={classes.card1}>
                    <CardMedia className={classes.media} image={image} />
                </Card>

                <Card className={classes.card2}>
                    <CardContent>
                        <Typography gutterBottom variant="h4" component="h4">
                            Karosserie
                        </Typography>
                        <Typography>
                            Durch den Einsatz hochwertiger
                            Karosserie-Richtbanksysteme wird bei komplizierten
                            Unfallschäden eine exakte Mess- und Pass-
                            genauigkeit der Karosserie und deren Anbauteilen
                            erreicht. Hier wird eine Verbindung geschaffen
                            zwischen millimetergenauen Richtens der Karosserie
                            und einer elektronischen Computer-Achsvermessung.
                            Somit wird eine exakte Unfall-Instandsetzung
                            ermöglicht. Bilder rechts: Bei den Schweißarbeiten
                            wird mit modernster Technik punktgenau auch bei
                            hochfesten Stählen Maßarbeit geleistet.
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
        </section>
    );
}

export default Karosserie;

//----------------Material-ui----------------------

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
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
        backgroundColor: "#fafafa",
    },
    card2: {
        width: "40vw",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "none",
        backgroundColor: "#fafafa",
    },
    media: {
        // height: "80vh",
        // width: "50vh",
        padding: theme.spacing(1),
        paddingTop: "86.25%", // 16:9
    },
}));
