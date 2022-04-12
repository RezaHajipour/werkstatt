import React from "react";
import { makeStyles, Typography } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import CardMedia from "@material-ui/core/CardMedia";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import image from "./images/back-hu.png";

function Hu() {
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
                            HU
                        </Typography>
                        <Typography>
                            Die gesetzlich vorgeschriebenen Untersuchungen
                            werden in Zusammenarbeit mit einer anerkannten
                            Prüforganisation durchgeführt.Die Hauptuntersuchung
                            soll vermeiden, dass Fahrzeuge mit
                            Sicherheitsmängeln am Straßenverkehr teilnehmen.
                            Deshalb führen amtlich anerkannte Prüforganisationen
                            diese Untersuchung in regelmäßigen Abständen an
                            allen Fahrzeugen mit eigenem amtlichen Kennzeichen
                            durch. Besteht ein Fahrzeug diese Überprüfung, wird
                            dies durch eine runde Prüfplakette am hinteren
                            amtlichen Kennzeichen nachgewiesen, die das Jahr und
                            den Monat anzeigt, in dem das Fahrzeug wieder zur HU
                            gebracht werden muss. Melden Sie Ihr Fahrzeug an,
                            den Rest erledigen wir.
                        </Typography>
                        <Typography gutterBottom variant="h4" component="h4">
                            AU
                        </Typography>
                        <Typography>
                            Mit der Integration der Untersuchung der Abgase (AU)
                            in die Hauptuntersuchung (HU) entfällt die bisherige
                            AU-Plakette am vorderen amtlichen Kennzeichen des
                            Kraftfahrzeugs. Der Nachweis der HU inkl. der AU
                            erfolgt nur noch über den HU-Prüfbericht und die
                            HU-Plakette auf dem hinteren Kennzeichen. Für alle
                            Kraftfahrzeuge kann die AU als Teiluntersuchung zur
                            HU von der Autostation als anerkannte AU Werkstatt
                            durchgeführt und anhand eines AU-Nachweises mit
                            fälschungserschwerenden Merkmalen bescheinigt
                            werden. Die Autostation kann gegenüber dem
                            Autofahrer immer belegen, wie wir entsprechend den
                            Herstellervorgaben die AU durchgeführt haben.
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
        </section>
    );
}

export default Hu;

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
            height: "100%",
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
