import React from "react";
import { makeStyles, Typography } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import CardMedia from "@material-ui/core/CardMedia";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import image from "./images/back-motor.jpeg";

function Motor() {
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
                            Motor
                        </Typography>
                        <Typography>
                            Im Gegensatz zu vielen anderen Bestandteilen, kann
                            die intensive Nutzung des Fahrzeugs vor allem zur
                            Verkürzung der Motor-Lebensdauer führen. Doch nicht
                            immer muss es den kompletten Ersatz des Motors
                            bedeuten. Oft ist eine Überholung die
                            wirtschaftlichere Lösung. Unter Einhaltung von
                            gewissen Leistungsstandards die vom Hersteller
                            angegeben werden, ist es möglich durch eine
                            Generalüberholung oder eine Instandsetzung, die
                            ursprüngliche Motorenleistung, gemäß
                            Bauartzulassung, wieder zu gewährleisten.
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
        </section>
    );
}

export default Motor;

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