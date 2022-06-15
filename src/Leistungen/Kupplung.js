import React from "react";
import {
    makeStyles,
    Typography,
    Card,
    CardContent,
    CardMedia,
    Grid,
} from "@material-ui/core";
import image from "../images/back-Kupplung.jpeg";

function Kupplung() {
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
                            Kupplung
                        </Typography>
                        <Typography>
                            Die Kupplung ist das Verbindungsteil zwischen Motor
                            und Getriebe und ist ein Verschleißteil und hält in
                            der Regel mehrere Jahre.
                            <br /> Wann die Kupplung verschlissen ist kann unser
                            Service-Team von der Kfz-Meisterwerkstatt
                            Hammerbrook nach einer Kontrolle an Ihrem Fahrzeug
                            gut abschätzen.
                            <br /> Wenn sie bereits defekt ist, reparieren wir
                            den Schaden oder tauschen die Kupplung aus.
                            Selbstverständlich bauen wir nur Ersatzteile in
                            Erstausrüsterqualität ein.
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
        </section>
    );
}

export default Kupplung;

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
            height: "40vh",
            width: "100vw",
        },
    },
    media: {
        padding: theme.spacing(1),
        paddingTop: "86.25%", // 16:9
    },
}));
