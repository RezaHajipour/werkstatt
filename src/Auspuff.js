import React from "react";
import { makeStyles, Typography } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import CardMedia from "@material-ui/core/CardMedia";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import image from "./images/back-Auspuff.jpeg";

function Auspuff() {
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
                            Auspuff
                        </Typography>
                        <Typography>
                            Der Auspuff Ihres Autos reduziert Lärm- und Umwelt-
                            belastung und schützt Sie vor giftigen Abgasen. Eine
                            defekte Anlage jedoch gefährdet Sie und andere.
                            Lassen Sie den Auspuff jetzt kostenlos bei uns
                            prüfen! Das sichtbare Rohr am hinteren Teil Ihres
                            Wagens ist nur das letzte Stück der Abgasanlage.
                            Tatsächlich besteht ein Auspuff aus vielen
                            verschiedenen Bauteilen: dem Abgaskrümmer, dem
                            sogenannten Hosenrohr, dem Katalysator sowie bis zu
                            drei Schalldämpfern. Bei jeder Fahrt werden diese
                            thermisch extrem beansprucht. Starke
                            Temperaturschwankungen durch heiße Abgase und
                            Außentemperaturen, aber auch Streusalz und Nässe,
                            setzen der Auspuff- anlage zu. So ist es kein
                            Wunder, dass sich relativ schnell Löcher bilden,
                            Teile lösen oder sie gar durchrostet. Der letzte
                            Schalldämpfer – Endschalldämpfer genannt – ist am
                            häufigsten kaputt: Bei etwa 90% aller Schäden am
                            Auspuff ist er es, der ausgetauscht werden muss.
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
        </section>
    );
}

export default Auspuff;

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
