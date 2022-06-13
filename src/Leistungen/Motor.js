import React from "react";
import {
    makeStyles,
    Typography,
    Card,
    CardContent,
    CardMedia,
    Grid,
} from "@material-ui/core";
import image from "../images/back-motor.jpeg";

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
                        <Typography gutterBottom variant="h5" component="h4">
                            Der Motor
                        </Typography>
                        <Typography>
                            Im Gegensatz zu vielen anderen Bestandteilen, kann
                            die intensive Nutzung Ihres Kfz vor allem zur
                            Verkürzung der Motor-Lebensdauer führen.
                            <br /> Doch nicht immer muss es den kompletten
                            Ersatz des Motors bedeuten. Oft ist eine Überholung
                            die wirtschaftlichere Lösung.
                            <br />
                            Unter Einhaltung von gewissen Leistungsstandards die
                            vom Hersteller angegeben werden, ist es uns möglich
                            durch eine Generalüberholung oder eine
                            Instandsetzung, die ursprüngliche Motorenleistung,
                            gemäß der Bauartzulassung wieder zu gewährleisten.
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
            height: "55vh",
            width: "100vw",
        },
    },
    media: {
        padding: theme.spacing(1),
        paddingTop: "86.25%", // 16:9
    },
}));
