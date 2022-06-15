import React from "react";
import {
    makeStyles,
    Typography,
    Card,
    CardContent,
    CardMedia,
    Grid,
} from "@material-ui/core";
import image from "../images/back-Zündung.jpeg";

function Zundung() {
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
                            Zündung
                        </Typography>
                        <Typography>
                            Das am Fahrzeug etwas nicht stimmt, erkennen auch
                            die meisten Laien:
                            <br />
                            Wenn ein Zylinder aufgrund von Zündaussetzern
                            sporadisch oder dauerhaft ausfällt, verringert sich
                            nicht nur die Leistung des Fahrzeugs erheblich, auch
                            im Motorlauf macht sich dies bemerkbar.
                            <br />
                            Dann ist vermutlich die Zündspule deines Fahrzeuges
                            defekt. Denn ohne einen kräftigen Zündfunken kommen
                            Benziner nicht voran, im Gegensatz zu den
                            Dieselmotoren, bei denen eine Selbstzündung
                            stattfindet. Grundsätzlich ist die Zündspule kein
                            klassisches Verschleißteil, sondern hat als ein rein
                            elektrisches Bauteil eine sehr lange Lebensdauer.
                            <br />
                            So eine Zündspule hält gut und gerne 100.000 bis
                            150.000 km durch.
                            <br />
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
        </section>
    );
}

export default Zundung;

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
            height: "80vh",
            width: "100vw",
        },
    },
    media: {
        padding: theme.spacing(1),
        paddingTop: "86.25%", // 16:9
    },
}));
