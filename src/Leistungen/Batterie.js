import React from "react";
import {
    makeStyles,
    Typography,
    Card,
    CardContent,
    CardMedia,
    Grid,
} from "@material-ui/core";
import image from "../images/back-Batterie.jpeg";

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
                        <Typography gutterBottom variant="h5" component="h4">
                            Batterie
                        </Typography>
                        <Typography>
                            Wenn die Batterie zu schwach ist springt das
                            Fahrzeug nicht an. Wie lange hält die Batterie, wenn
                            das Fahrzeug steht, bis sie sich komplett entlädt?
                            Jeder Autofahrer weiß, wenn der Pkw zu lange nicht
                            mehr bewegt wird, kann sich die batterie entladen.
                            <br />
                            Dann springt das Fahrzeug nicht mehr an und muss in
                            die Kfz-Werkstatt. Viele fragen sich zurecht, wie
                            lange sie denn nun ihr Pkw parken können, ohne dass
                            sich die Batterie entlädt. Während es vor vielen
                            Jahren noch gut möglich war, sein Fahrzeug mehrere
                            Monate stehen zu lassen, ohne dann einen Fehlstart
                            zu riskieren, ist das heute bei modernen Fahrzeugen
                            dank reichlich Bordelektronik und Steuergeräten
                            nicht mehr möglich. Wenn der Pkw geparkt und
                            abgeschlossen ist, schalten sich bei modernen
                            Fahrzeugen trotzdem noch viele Verbraucher nicht
                            komplett ab.
                            <br /> Schließlich muss die Alarmanlage durchgehend
                            funktionieren und die Zentralverriegelung immer auf
                            ein Signal von der Fernbedienung am Autoschlüssel
                            warten. <br />
                            So muss ein Autofahrer damit rechnen, dass die
                            Kapazität der Batterie seines stehenden Pkw's schon
                            nach 3-4 Wochen nicht mehr ausreichend ist für den
                            Startvorgang seines Pkw's. Dies ist natürlich eine
                            Schätzung, die von Modell zu Modell abweichen kann.
                            Mehrere Monate wird die Batterie eines parkenden
                            modernen Fahrzeuges aber nur noch selten
                            durchhalten. Wir von der Autowerkstatt Waisi beraten
                            Sie gerne weiter, wenn es um die Leistung und Pflege
                            Ihrer Autobatterie geht – und wenn sie doch mal
                            entladen sein sollte, sind wir für Sie da.
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
