import React from "react";
import { makeStyles, Typography } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import CardMedia from "@material-ui/core/CardMedia";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import image from "./images/back-Batterie.jpeg";

function Batterie() {
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
                            Batterie
                        </Typography>
                        <Typography>
                            Es gibt Zeiten, da muss das Auto einfach stehen
                            bleiben.Doch wie lange hält die Batterie, wenn das
                            Auto steht, bis sie sich entlädt? Jeder Autofahrer
                            weiß: Wenn der Wagen zu lange nicht mehr bewegt
                            wird, kann sich die Batterie entladen. Dann springt
                            das Auto nicht mehr an und die Kfz-Werkstatt muss
                            eingreifen. Viele fragen sich zurecht, wie lange sie
                            denn nun ihr Auto parken können, ohne dass sich die
                            Batterie entlädt. Während es vor vielen Jahren noch
                            gut möglich war, sein Auto mehrere Monate stehen zu
                            lassen, ohne dann einen Fehlstart zu riskieren, ist
                            das heute bei modernen Autos dank reichlich
                            Bordelektronik und Steuergeräten nicht mehr möglich.
                            Wenn das Auto geparkt und abgeschlossen ist, laufen
                            bei modernen Autos trotzdem noch viele Verbraucher
                            weiter. Schließlich muss die Alarmanlage durchgehend
                            funktionieren und die Zentralverriegelung immer auf
                            ein Signal von der Fernbedienung am Autoschlüssel
                            warten. So muss ein Autofahrer damit rechnen, dass
                            die Batterie seines stehenden Autos schon nach drei
                            bis vier Wochen leer ist. Dies ist natürlich eine
                            Schätzung, die von Modell zu Modell abweichen kann.
                            Mehrere Monate wird die Batterie eines parkenden
                            (modernen) Autos aber nur noch selten durchhalten.
                            Wir von Automobile Jahn beraten Sie gerne weiter,
                            wenn es um die Leistung und Pflege Ihrer
                            Autobatterie geht – und wenn sie doch mal entladen
                            sein sollte, sind wir für Sie da.
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
        </section>
    );
}

export default Batterie;

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
