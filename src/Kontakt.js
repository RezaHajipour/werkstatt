import React from "react";
import { makeStyles, Typography } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

function Kontakt() {
    const classes = useStyles();
    return (
        <section>
            <h1 className={classes.title}>Wir sind für Sie da!</h1>
            <Grid container className={classes.root}>
                <div>
                    <Card className={classes.card2}>
                        <CardContent>
                            <Typography
                                gutterBottom
                                variant="h6"
                                component="h4"
                            >
                                <strong>Anschrift</strong>
                            </Typography>
                            <Typography>
                                KFZ MEISTERBETRIEB WAISI
                                <br />
                                Billwerder Steindamm 26 <br />
                                20537 Hamburg
                            </Typography>
                        </CardContent>
                    </Card>
                    <Card className={classes.card2}>
                        <CardContent>
                            <Typography
                                gutterBottom
                                variant="h6"
                                component="h4"
                            >
                                <strong>Online</strong>
                            </Typography>
                            <Typography>
                                E-Mail: meisterbetriebwaisi@gmail.com
                            </Typography>
                        </CardContent>
                    </Card>
                </div>
                <div>
                    <Card className={classes.card2}>
                        <CardContent>
                            <Typography
                                gutterBottom
                                variant="h6"
                                component="h4"
                            >
                                <strong>Telefon</strong>
                            </Typography>
                            <Typography>
                                Rufen Sie an unter: 040 - 1808 1289 <br />
                                Mobile: 0176 45 88 0462
                            </Typography>
                        </CardContent>
                    </Card>
                    <Card className={classes.card2}>
                        <CardContent>
                            <Typography
                                gutterBottom
                                variant="h6"
                                component="h4"
                            >
                                <strong>Öffnungszeiten</strong>
                            </Typography>
                            <Typography>
                                Montag - Freitag: 9:00--17:00 <br />
                                Samstag: 8:00-13:00
                            </Typography>
                        </CardContent>
                    </Card>
                </div>
            </Grid>
        </section>
    );
}

export default Kontakt;

//----------------Material-ui----------------------

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        height: "50vh",
    },

    typography: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },

    card2: {
        width: "40vw",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        boxShadow: "none",
        backgroundColor: "#fafafa",
    },
    title: {
        textAlign: "center",
        paddingTop: "1em",
        fontSize: "2em",
    },
}));
