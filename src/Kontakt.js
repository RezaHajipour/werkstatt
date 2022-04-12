import React from "react";
import { makeStyles, Typography } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

function Kontakt() {
    const classes = useStyles();
    return (
        <section>
            <h2 className={classes.title}>Wir sind für Sie da!</h2>
            <Grid container className={classes.root}>
                <div>
                    <Card className={classes.card2}>
                        <CardContent>
                            <Typography>
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
                            <Typography>
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
                            <Typography>
                                <strong>Telefon</strong>
                            </Typography>
                            <Typography>
                                Rufen Sie an unter: 040 - 1808 1289
                            </Typography>
                        </CardContent>
                    </Card>
                    <Card className={classes.card2}>
                        <CardContent>
                            <Typography>
                                <strong>Öffnungszeiten</strong>
                            </Typography>
                            <Typography>
                                Montag - Freitag: 9:00--18:00 <br />
                                Samstag: 10:00-15:00
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
        [theme.breakpoints.down("xs")]: { height: "100%" },
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
        // backgroundColor: "#fafafa",
        [theme.breakpoints.down("xs")]: {
            width: "100%",
            height: "100%",
        },
    },
    title: {
        textAlign: "center",
        paddingTop: "1em",
        fontSize: "2em",
        [theme.breakpoints.down("xs")]: {
            fontSize: [20, "!important"],
        },
    },
}));
