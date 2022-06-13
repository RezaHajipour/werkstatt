import React from "react";
import {
    makeStyles,
    Typography,
    Card,
    CardContent,
    CardMedia,
    Grid,
} from "@material-ui/core";
import image from "../images/auto-b1.png";

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
                            Inspektionsleistungen an. Diese beinhaltet z.B. die
                            Prüfung alle Verschleißteile.
                            <br />
                            Des Weiteren bieten wir Ihnen eine Anzahl von
                            praktischen und zusätzlichen spezifischen Komfort-
                            und Sicherheitsleistungen:
                        </Typography>
                        <Typography variant="h6" component="h4">
                            <strong>. Antrieb</strong>
                        </Typography>
                        <Typography>
                            Check der Antriebswellen und Gelenke, Radlager.
                        </Typography>
                        <Typography variant="h6" component="h4">
                            <strong>. Bremsen</strong>
                        </Typography>
                        <Typography>
                            Verschleißkontrolle, Dichtheitsüberprüfung, Prüfung
                            der Bremswirkung.
                        </Typography>
                        <Typography variant="h6" component="h4">
                            <strong>. Elektrik</strong>
                        </Typography>
                        <Typography>
                            Lichtmaschinenleistungstest, ggf. prüfen
                            Anlasserstromaufnahme, Batteriekontrolle,
                            Funktionstest der Beleuchtung.
                        </Typography>

                        <Typography variant="h6" component="h4">
                            <strong>. Fahrwerk</strong>
                        </Typography>
                        <Typography>
                            Rad und Reifenkontrolle, Prüfung der Stoßdämpfer und
                            Federn, Sichtprüfung der Achsgeometrie.
                        </Typography>
                        <Typography variant="h6" component="h4">
                            <strong>. Motor</strong>
                        </Typography>
                        <Typography>
                            Öl und Flüßigkeitskontrolle, Kühlung, Fehlerspeicher
                            auslesen, Abgasanlage prüfen und Abgasanalyse.
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
            height: "100vh",
            width: "100vw",
        },
    },
    media: {
        padding: theme.spacing(1),
        paddingTop: "86.25%", // 16:9
    },
}));
