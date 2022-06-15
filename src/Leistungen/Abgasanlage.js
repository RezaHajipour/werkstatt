import React from "react";
import {
    makeStyles,
    Typography,
    Card,
    CardContent,
    CardMedia,
    Grid,
} from "@material-ui/core";
import image from "../images/back-Auspuff.jpeg";

function Abgasanlage() {
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
                            Abgasanlage
                        </Typography>
                        <Typography>
                            Die Abgasanlage Ihres Fahrzeuges reduziert Lärm- und
                            Umweltbelastung und schützt Sie vor giftigen
                            Abgasen. Eine defekte Abgasanlage jedoch gefährdet
                            Sie und andere.
                            <br />
                            Lassen Sie die Abgasanlage jetzt kostenlos bei uns
                            prüfen!
                            <br />
                            Das sichtbare Endrohr am hinteren Teil Ihres Wagens
                            ist nur das letzte Stück der Abgasanlage.
                            Tatsächlich besteht dies aus vielen verschiedenen
                            Bauteilen: <br />
                            dem Abgaskrümmer, dem sogenannten Hosenrohr, dem
                            Katalysator sowie bis zu 3 Schalldämpfern. Bei jeder
                            Fahrt werden diese thermisch extrem beansprucht.
                            Starke Temperaturschwankungen durch heiße Abgase und
                            Außentemperaturen, aber auch Streusalz und Nässe,
                            setzen der Abgasanlage zu. So ist es kein Wunder,
                            dass sich relativ schnell Undichtigkeiten bilden,
                            Teile lösen oder sie einfach durchrostet.
                            <br />
                            Der letzte Schalldämpfer – Endschalldämpfer genannt
                            – ist am häufigsten kaputt.
                            <br />
                            Bei etwa 90% aller Schäden an der Abgasanlage ist er
                            es, der ausgetauscht werden muss.
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
        </section>
    );
}

export default Abgasanlage;

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
            height: "100%",
            width: "100vw",
        },
    },
    media: {
        padding: theme.spacing(1),
        paddingTop: "86.25%", // 16:9
    },
}));
