import React from "react";
import { makeStyles, Typography } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import CardMedia from "@material-ui/core/CardMedia";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import image from "./images/auto-b1.png";

function Reifen() {
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
                            Räder & Reifen
                        </Typography>
                        <Typography>
                            In unserer KFZ Werkstatt können Sie neben der
                            Montage von Rädern auch noch andere Dienstleistungen
                            im Bereich Räder & Reifen in Anspruch nehmen. Zum
                            Beispiel werden Ihre Räder bei uns stationär
                            gewuchtet. Wir nehmen die Messung vor und sorgen
                            dafür, dass Ihre Räder keine Unwucht aufweisen.
                            Durch das Auswuchten werden die Reifen wieder
                            problemlos laufen. Das heißt, die Abnutzung wird
                            verringert und Lenkung oder Fahrwerk sind nicht
                            beeinträchtigt. Sie sollten daher regelmäßig Ihre
                            Räder und Reifen kontrollieren und Auswuchten
                            lassen. Wir übernehmen diese Aufgabe gerne für Sie.
                            Außerdem werden wir uns um einen passenden Termin
                            kümmern, damit Ihr Fahrzeug keine längere Stehzeit
                            haben wird.
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
        </section>
    );
}

export default Reifen;

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
