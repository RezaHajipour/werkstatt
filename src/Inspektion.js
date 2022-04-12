import React from "react";
import { makeStyles, Typography } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import CardMedia from "@material-ui/core/CardMedia";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import image from "./images/auto-b1.png";

function Inspektion() {
    const classes = useStyles();
    return (
        <section>
            <Grid container className={classes.root}>
                <Card className={classes.card1}>
                    <CardMedia className={classes.media} image={image} />
                </Card>

                <Card className={classes.card2}>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h4">
                            Inspektion
                        </Typography>
                        <Typography>
                            Um Ihnen in Ihrem Fahrzeug den bestmöglichen
                            Standard an Sicherheit und Zuverlässigkeit
                            gewährleisten zu können, bieten wir Ihnen umfassende
                            Inspektions-Leistungen an. Diese beinhalten alle
                            Verschleiß-Quellen. Des Weiteren bieten wir Ihnen
                            eine Anzahl von praktischen und zusätzlichen
                            spezifischen Komfort- und Sicherheitsleistungen:
                        </Typography>
                        <Typography variant="h6" component="h4">
                            <strong>. Antrieb</strong>
                        </Typography>
                        <Typography>
                            Antriebswellen und -gelenke, Lagertechnik
                        </Typography>
                        <Typography variant="h6" component="h4">
                            <strong>. Bremsen</strong>
                        </Typography>
                        <Typography>
                            Verschleißkontrolle, Dichtheitsüberprüfung,
                            Bremsenprüfstand.
                        </Typography>
                        <Typography variant="h6" component="h4">
                            <strong>. Elektrik</strong>
                        </Typography>
                        <Typography>
                            Lichtmaschinen-Leistungstest, Anlasserstromaufnahme,
                            Batteriekontrolle, Lichtanlage.
                        </Typography>

                        <Typography variant="h6" component="h4">
                            <strong>. Fahrwerk</strong>
                        </Typography>
                        <Typography>
                            Rad- und Reifenkontrolle, Stoßdämpfer und Federung,
                            Achsgeometrie.
                        </Typography>
                        <Typography variant="h6" component="h4">
                            <strong>. Motor</strong>
                        </Typography>
                        <Typography>
                            Öl- und Flüßigkeitskontrolle, Kühlung, On Board
                            Diagnose, Auspuffanlage und Abgasanalyse.
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
        </section>
    );
}

export default Inspektion;

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
        // backgroundColor: "#fafafa",
        [theme.breakpoints.down("xs")]: {
            height: "40vh",
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
            height: "100vh",
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
