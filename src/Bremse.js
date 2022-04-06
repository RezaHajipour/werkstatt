import React from "react";
import { makeStyles, Typography } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import CardMedia from "@material-ui/core/CardMedia";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import image from "./images/auto-b1.png";

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
                        <Typography gutterBottom variant="h4" component="h4">
                            Bremse
                        </Typography>
                        <Typography>
                            Eine gut funktionierende Bremsanlage ist für die
                            Sicherheit von höchster Wichtigkeit! Damit Sie sich
                            in allen Situationen auf Ihre Bremse verlassen
                            können, prüfen wir die komplette Bremsanlage. Auch
                            beim Bremsen Wechseln oder dem Ersetzen der
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
