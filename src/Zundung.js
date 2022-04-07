import React from "react";
import { makeStyles, Typography } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import CardMedia from "@material-ui/core/CardMedia";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import image from "./images/back-Zündung.jpeg";

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
                        <Typography gutterBottom variant="h4" component="h4">
                            Zündung
                        </Typography>
                        <Typography>
                            Dass am Fahrzeug etwas nicht stimmt, erkennen auch
                            die meisten Laien: Wenn ein Zylinder aufgrund von
                            Zündaussetzern sporadisch oder dauerhaft ausfällt,
                            verringert sich nicht nur die Leistung des Fahrzeugs
                            erheblich, auch im Motorlauf macht sich dies
                            bemerkbar.
                            <br />
                            Dann ist vermutlich die Zündspule deines Autos
                            defekt. Denn ohne einen kräftigen Zündfunken kommen
                            Benziner nicht voran, im Gegensatz zu den
                            Dieselmotoren, bei denen eine Selbstzündung
                            stattfindet. Grundsätzlich ist die Zündspule kein
                            klassisches Verschleißteil, sondern hat als ein rein
                            elektrisches Bauteil eine sehr lange Lebensdauer. So
                            eine Zündspule hält gut und gerne 100.000 bis
                            150.000 km durch und manche Autofahrer müssen sie
                            auch erst nach mehreren hunderttausend Kilometern
                            austauschen.
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
        </section>
    );
}

export default Zundung;

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
