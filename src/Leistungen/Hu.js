import React from "react";
import {
    makeStyles,
    Typography,
    Card,
    CardContent,
    CardMedia,
    Grid,
} from "@material-ui/core";
import image from "../images/back-hu.png";

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
                        <Typography variant="h5">
                            Die Hauptuntersuchung(HU)
                        </Typography>
                        <Typography>
                            Die gesetzlich vorgeschriebene Hauptuntersuchung
                            wird in Zusammenarbeit mit einer anerkannten
                            Prüforganisation durchgeführt. Die Hauptuntersuchung
                            soll vermeiden, dass Fahrzeuge mit
                            Sicherheitsmängeln am Straßenverkehr teilnehmen.
                            <br />
                            Deshalb führen amtlich anerkannte Prüforganisationen
                            diese Hauptuntersuchung regelmäßigen aller 2 Jahre
                            an Ihrem Fahrzeugen durch.
                            <br />
                            Besteht ein Fahrzeug diese Überprüfung, wird dies
                            durch einen Prüfbericht und runde Prüfplakette am
                            hinteren amtlichen Kennzeichen nachgewiesen, die das
                            Jahr und den Monat anzeigt, in dem das Fahrzeug
                            wieder zur Hauptuntersuchung vorgeführt werden muss.
                            <br />
                            Melden Sie Ihr Fahrzeug an, den Rest erledigen wir
                            für Sie.
                        </Typography>
                        <br />
                        <Typography variant="h5">
                            Die Abgasuntersuchung(AU)
                        </Typography>
                        <Typography>
                            Mit der Integration der Abgasuntersuchung (AU) in
                            die Hauptuntersuchung (HU) entfällt die bisherige
                            AU-Plakette am vorderen amtlichen Kennzeichen des
                            Kraftfahrzeugs.
                            <br />
                            Der Nachweis der HU inkl. der AU erfolgt nur noch
                            über den HU-Prüfbericht, dem AU-Prüfbericht und der
                            runden HU-Plakette auf dem hinteren Kennzeichen. Für
                            alle Kraftfahrzeuge kann die AU auch als
                            Teiluntersuchung zur HU von der
                            Kfz.-Meisterwerkstatt als anerkannte AU Werkstatt
                            durchgeführt und anhand eines AU-Nachweises mit
                            fälschungserschwerenden Merkmalen bescheinigt
                            werden.
                            <br />
                            Die Kfz.-Meisterwerkstatt kann gegenüber dem
                            Autofahrer immer belegen, wie entsprechend der
                            Herstellervorgaben die AU durchgeführt wird.
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
