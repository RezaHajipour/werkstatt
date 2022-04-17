import React from "react";
import {
    makeStyles,
    Typography,
    Card,
    CardContent,
    CardMedia,
    Grid,
} from "@material-ui/core";
import image from "../images/back-Bremse.jpeg";

function Bremse() {
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
                            Bremse
                        </Typography>
                        <Typography>
                            Eine gut funktionierende Bremsanlage ist für die
                            Sicherheit von höchster Wichtigkeit! Damit Sie sich
                            in allen Situationen auf Ihre Bremse verlassen
                            können, prüfen wir die komplette Bremsanlage. Auch
                            beim Wechseln der Bremse oder dem ersetzen der
                            Bremsflüssigkeit vertrauen wir wie bei Bremsscheiben
                            und Bremsbelägen auf Ersatzteile in
                            Erstausrüsterqualität führender Markenhersteller.
                            <br />
                            <br />
                            <strong>
                                Bremsenservice in unserer Werkstatt Enthaltene
                                Leistungen:
                            </strong>
                            <br />
                            <br />• Prüfung des Bremssystems inkl. der
                            Bremsschläuche <br />• nach Bedarf fachgerechter
                            Austausch von Komponenten (Bremsscheiben,
                            Bremsbeläge und Warnkontakt) <br />• Reinigung der
                            Bremsen <br />• Kontrolle der Bremswirkung
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
        </section>
    );
}

export default Bremse;

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
            height: "100%",
            width: "100vw",
        },
    },
    media: {
        padding: theme.spacing(1),
        paddingTop: "86.25%", // 16:9
    },
}));
