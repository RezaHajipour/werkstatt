import React from "react";
import {
    makeStyles,
    Typography,
    Card,
    CardContent,
    CardMedia,
    Grid,
} from "@material-ui/core";
import image from "./images/back-Stoßdämpfer.jpeg";

function Stossdampfer() {
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
                            Stoßdämpfer
                        </Typography>
                        <Typography>
                            Es gibt so manche Autoteile, bei denen vergisst man
                            mit der Zeit einfach, dass sie existieren. Die
                            Stoßdämpfer könnte man als so ein Autoteil
                            bezeichnen. Dass sie sehr wichtige Komponenten eines
                            jeden Autos sind, ohne die eine Fahrt unmöglich
                            wäre, wissen die meisten gar nicht. Erst wenn ein
                            Defekt vorliegt und das Auto nicht mehr das macht,
                            was es sollte, erinnert man sich wieder an die
                            Existenz von Stoßdämpfern. Dann helfen wir Ihnen
                            gerne weiter. <br />
                            Defekte Stoßdämpfer sind ein Sicherheitsrisiko,
                            deshalb sollten diese alle 20.000 Kilometer geprüft
                            werden. Gerne überprüfen wir die Stoßdämpfer auf
                            Funktionsfähigkeit und ersetzen, wenn notwendig,
                            defekte Teile mit Ersatzteilen in
                            Erstausrüsterqualität führender Markenhersteller.
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
        </section>
    );
}

export default Stossdampfer;

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
            height: "80vh",
            width: "100vw",
        },
    },
    media: {
        padding: theme.spacing(1),
        paddingTop: "86.25%", // 16:9
    },
}));
