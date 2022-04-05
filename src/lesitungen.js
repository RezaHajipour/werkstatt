import * as React from "react";
import { makeStyles, Typography } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import CardMedia from "@material-ui/core/CardMedia";
import Card from "@material-ui/core/Card";
import motor from "./images/motor.png";
import getriebe from "./images/getriebe.png";
import lenkrader from "./images/lenkrader.png";
import ol from "./images/ol.png";
import reifen from "./images/reifen.png";
import stossdampfer from "./images/stossdampfer.png";
import zundung from "./images/zundung.png";
import ausspuff from "./images/ausspuff.png";
import batterie from "./images/batterie.png";
import bremse from "./images/bremse.png";
import "./Leistungen.css";

export default function NestedGrid() {
    const classes = useStyles();

    function FormRow1() {
        return (
            <React.Fragment>
                <Grid item xs={2}>
                    <Card>
                        <CardMedia className={classes.media} image={motor} />
                    </Card>
                </Grid>
                <Grid item xs={2}>
                    <Card>
                        <CardMedia className={classes.media} image={getriebe} />
                    </Card>
                </Grid>
                <Grid item xs={2}>
                    <Card>
                        <CardMedia
                            className={classes.media}
                            image={lenkrader}
                        />
                    </Card>
                </Grid>
                <Grid item xs={2}>
                    <Card>
                        <CardMedia className={classes.media} image={ol} />
                    </Card>
                </Grid>
            </React.Fragment>
        );
    }

    function FormRow2() {
        return (
            <React.Fragment>
                <Grid item xs={2}>
                    <Card>
                        <CardMedia className={classes.media} image={reifen} />
                    </Card>
                </Grid>
                <Grid item xs={2}>
                    <Card>
                        <CardMedia
                            className={classes.media}
                            image={stossdampfer}
                        />
                    </Card>
                </Grid>
                <Grid item xs={2}>
                    <Card>
                        <CardMedia className={classes.media} image={zundung} />
                    </Card>
                </Grid>
                <Grid item xs={2}>
                    <Card>
                        <CardMedia className={classes.media} image={ausspuff} />
                    </Card>
                </Grid>
            </React.Fragment>
        );
    }

    function FormRow3() {
        return (
            <React.Fragment>
                <Grid item xs={2}>
                    <Card>
                        <CardMedia className={classes.media} image={batterie} />
                    </Card>
                </Grid>
                <Grid item xs={2}>
                    <Card>
                        <CardMedia className={classes.media} image={bremse} />
                    </Card>
                </Grid>
            </React.Fragment>
        );
    }
    return (
        <div className={classes.root} style={{ padding: 20, margin: 20 }}>
            <Typography
                variant="h2"
                component="h2"
                className={classes.typography}
            >
                Leistungentut amut egypt
            </Typography>
            <Grid container spacing={1}>
                <Grid
                    container
                    item
                    xs={12}
                    spacing={1}
                    justify="space-evenly"
                    style={{ margin: 10 }}
                >
                    <FormRow1 />
                </Grid>
                <Grid
                    container
                    item
                    xs={12}
                    spacing={1}
                    justify="space-evenly"
                    style={{ margin: 10 }}
                >
                    <FormRow2 />
                </Grid>
                <Grid
                    container
                    item
                    xs={12}
                    spacing={1}
                    justify="space-evenly"
                    style={{ margin: 10 }}
                >
                    <FormRow3 />
                </Grid>
            </Grid>
        </div>
    );
}

//----------------Material-ui----------------------

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        justifyContent: "between",
        // maxWidth: 545,
    },

    typography: {
        display: "flex",
        bgcolor: "lightgreen",
        alignItems: "center",
        justifyContent: "center",
    },
    media: {
        height: 0,
        padding: theme.spacing(1),
        paddingTop: "86.25%", // 16:9
    },
}));
