import React from "react";
import {
    makeStyles,
    Typography,
    Card,
    CardContent,
    CardMedia,
    Grid,
} from "@material-ui/core";
import image from "../images/back-Lenkrad.jpeg";

function Lenkrad() {
    const classes = useStyles();
    return (
        <section>
            <Grid container className={classes.root}>
                <Card className={classes.card1}>
                    <CardMedia className={classes.media} image={image} />
                </Card>

                <Card className={classes.card2}>
                    <CardContent>
                        <Typography variant="h5" component="h4">
                            Lenkrad/Achsvermessung
                        </Typography>
                        <Typography>
                            Ihr Auto verhält sich ungewohnt in den Kurven? Die
                            Lenkung hat Spiel oder hält die Spur nicht mehr?
                            <br />
                            Entscheident für das Fahrverhalten und die
                            Fahreigenschaften Ihres Wagens sind die Korrekt
                            eingestellte Spur der Sturz und Nachlaufwerte. Mit
                            unserem Mess und Einstellverfahren können wir bei
                            der Vermessung nicht nur die Werte prüfen und
                            einstellen, sondern auch die gesamte Achsgeometrie
                            des Autos durchchecken und Abweichungen feststellen.
                            Dies gilt sowohl für die Vermessung der Vorder-
                            sowie für die Hinterachse. Die Achsvermessung bei
                            uns beinhaltet: Sichtprüfung der Felden und Reifen.
                            Vermessung aller Räder Ein Protokoll
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
        </section>
    );
}

export default Lenkrad;

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
            height: "65vh",
            width: "100vw",
        },
    },
    media: {
        padding: theme.spacing(1),
        paddingTop: "86.25%", // 16:9
    },
}));
