import React from "react";
import {
    makeStyles,
    Typography,
    Card,
    CardContent,
    CardMedia,
    Grid,
} from "@material-ui/core";
import image from "../images/back-Diagnose.jpeg";

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
                        <Typography gutterBottom variant="h5" component="h4">
                            Diagnose
                        </Typography>
                        <Typography>
                            Wenn die Kontrollampe im Display Ihres Fahrzeuges
                            aufleuchtet, ist es Zeit für eine Fehlerdiagnose.
                            Dafür lesen wir den Fehlerspeicher Ihres Fahrzeuges
                            aus und können so schnell und einfach feststellen,
                            wo es in der Elektronik Ihres Fahrzeug klemmt. Die
                            Fehlerdiagnose erlaubt es uns, mögliche Defekte
                            frühzeitig zu erkennen.
                            <br />
                            So können wir Reparaturen an Ihrem Fahrzeug
                            vornehmen, bevor es zu größeren Schäden, Ausfällen
                            oder gar Unfällen kommt.
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

//----------------Material-ui Styles----------------------

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
            height: "100%",
            width: "100vw",
        },
    },
    media: {
        padding: theme.spacing(1),
        paddingTop: "86.25%", // 16:9
    },
}));
