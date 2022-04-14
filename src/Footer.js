import React from "react";
import {
    makeStyles,
    Typography,
    Grid,
    Card,
    CardContent,
} from "@material-ui/core";

export default function ButtonAppBar() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container className={classes.root}>
                <Card className={classes.card}>
                    <CardContent>
                        <Typography gutterBottom variant="h6" component="h4">
                            KFZ MEISTERBETRIEB WAISI
                        </Typography>
                        <Typography
                            variant="body2"
                            color="textSecondary"
                            component="p"
                        >
                            Billwerder Steindamm 26
                        </Typography>
                        <Typography
                            variant="body2"
                            color="textSecondary"
                            component="p"
                        >
                            20537 Hamburg
                        </Typography>
                        <Typography
                            variant="body2"
                            color="textSecondary"
                            component="p"
                        >
                            St.-Nr 46/258/03611
                        </Typography>
                    </CardContent>
                </Card>

                <Card className={classes.card}>
                    <CardContent>
                        <Typography gutterBottom variant="h6" component="h4">
                            Bankverbindung: Hamburger Sparkasse{" "}
                        </Typography>
                        <Typography
                            variant="body2"
                            color="textSecondary"
                            component="p"
                        >
                            IBAN: DE13 2005 0550 1500 8175 54
                        </Typography>
                        <Typography
                            variant="body2"
                            color="textSecondary"
                            component="p"
                        >
                            SWIFT / BIC: HASPDEHHXXX
                        </Typography>
                    </CardContent>
                </Card>

                <Card className={classes.card}>
                    <CardContent>
                        <Typography gutterBottom variant="h6" component="h4">
                            ÖFFNUNGSZEITEN
                        </Typography>
                        <Typography
                            variant="body2"
                            color="textSecondary"
                            component="p"
                        >
                            Montag - Freitag: 9:00-18:00
                        </Typography>
                        <Typography
                            variant="body2"
                            color="textSecondary"
                            component="p"
                        >
                            Samstag: 10:00-15:00
                        </Typography>
                    </CardContent>
                </Card>

                <Card className={classes.card}>
                    <CardContent>
                        <Typography gutterBottom variant="h6" component="h4">
                            KONTAKT:
                        </Typography>
                        <Typography
                            variant="body2"
                            color="textSecondary"
                            component="p"
                        >
                            E-Mail: meisterbetriebwaisi@gmail.com
                        </Typography>
                        <Typography
                            variant="body2"
                            color="textSecondary"
                            component="p"
                        >
                            Tel.: 040 - 1808 1289
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
        </div>
    );
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        justifyContent: "space-around",
        alignItems: "flex-start",
        textAlign: "center",
        flexBasis: "0%",
        backgroundColor: "#00bad4",
        boxShadow: "0",
    },

    card: {
        maxWidth: 400,
        maxHeight: 300,
        backgroundColor: "#00bad4",
        boxShadow: "none",
    },

    typography: {
        display: "flex",
        bgcolor: "lightgreen",
        alignItems: "center",
        justifyContent: "center",
    },
    media: {
        paddingTop: "70%",
        backgroundSize: "60%",
    },
}));
