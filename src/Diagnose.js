import React from "react";
import { makeStyles, Typography } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import CardMedia from "@material-ui/core/CardMedia";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import image from "./images/auto-b1.png";

function Diagnose() {
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
                            Diagnose
                        </Typography>
                        <Typography>
                            Wenn ein Lämpchen im Cockpit Ihres Autos
                            aufleuchtet, ist es Zeit für eine Fehlerdiagnose.
                            Dafür lesen wir den Fehlerspeicher Ihres Autos aus
                            und können so schnell und einfach feststellen, wo
                            der Schuh drückt. Die Fehlerdiagnose erlaubt es uns,
                            mögliche Defekte frühzeitig zu erkennen. So können
                            wir Reparaturen an Ihrem Auto vornehmen, bevor es zu
                            größeren Schäden, Ausfällen oder gar Unfällen kommt.
                            <br />
                            Die Technik und Elektronik moderner Fahrzeuge wird
                            immer komplexer. Wir verfügen über neueste
                            technische Informationen, modernste und hochwertige
                            Prüftechnik und sind durch laufende Weiterbildung
                            technisch auf dem aktuellen Stand.
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
        </section>
    );
}

export default Diagnose;

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
