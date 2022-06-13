import React from "react";
import {
    makeStyles,
    Typography,
    Card,
    CardContent,
    CardMedia,
    Grid,
} from "@material-ui/core";
import image from "../images/back-Reifen.jpeg";

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
                        <Typography gutterBottom variant="h5" component="h4">
                            Räder & Reifen
                        </Typography>
                        <Typography>
                            In unserer KFZ Meisterwerkstatt können Sie neben der
                            Montage von Rädern auch noch andere Dienstleistungen
                            im Bereich Räder & Reifen in Anspruch nehmen. Zum
                            Beispiel können wir Ihre Räder bei uns stationär
                            gewuchten. Wir nehmen die Messung vor und sorgen
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
        [theme.breakpoints.down("xs")]: {
            height: "80vh",
            width: "100vw",
        },
    },
    media: {
        padding: theme.spacing(1),
        paddingTop: "86.25%", // 16:9
    },
}));
