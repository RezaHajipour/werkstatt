import * as React from "react";
import "./Leistungen.css";
import { makeStyles, Typography } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import CardMedia from "@material-ui/core/CardMedia";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import { Link } from "@material-ui/core";
import { NavLink as RouterLink } from "react-router-dom";
import inspektion from "./images/inspektion.png";
import meisterbetrieb from "./images/meisterbetrieb.png";
import huAu from "./images/huAu.png";
import diagnose from "./images/diagnose.png";
import reifen from "./images/reifen.png";
import aircondition from "./images/aircondition.png";

export default function NestedGrid() {
    const classes = useStyles();

    return (
        <div>
            <Grid container className={classes.root}>
                <Link
                    component={RouterLink}
                    to="/uber"
                    style={{ textDecoration: "none" }}
                >
                    <Card className={classes.card}>
                        <CardActionArea>
                            <CardMedia
                                className={classes.media}
                                image={meisterbetrieb}
                            />
                            <CardContent>
                                <Typography
                                    gutterBottom
                                    variant="h6"
                                    component="h4"
                                >
                                    MEISTERBETRIEB
                                </Typography>

                                <Typography
                                    variant="body2"
                                    color="textSecondary"
                                    component="p"
                                    className={classes.meister}
                                >
                                    In unserer Autowerkstatt in Hamburg wird Ihr
                                    Pkw professionell gewartet bzw. instand
                                    gesetzt.
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Link>
                <Link
                    component={RouterLink}
                    to="/inspektion"
                    style={{ textDecoration: "none" }}
                >
                    <Card className={classes.card}>
                        <CardActionArea>
                            <CardMedia
                                className={classes.media}
                                image={inspektion}
                            />
                            <CardContent className={classes.content}>
                                <Typography
                                    gutterBottom
                                    variant="h6"
                                    component="h4"
                                >
                                    INSPEKTION
                                </Typography>
                                <Typography
                                    variant="body2"
                                    color="textSecondary"
                                    component="p"
                                    className={classes.inspektion}
                                >
                                    Inspektionen in Hamburg wir prüfen Ihr
                                    Fahrzeug auf Herz und Nieren.
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Link>
                <Link
                    component={RouterLink}
                    to="/hu"
                    style={{ textDecoration: "none" }}
                >
                    <Card className={classes.card}>
                        <CardActionArea>
                            <CardMedia className={classes.media} image={huAu} />
                            <CardContent>
                                <Typography
                                    gutterBottom
                                    variant="h6"
                                    component="h4"
                                >
                                    HU/AU
                                </Typography>
                                <Typography
                                    variant="body2"
                                    color="textSecondary"
                                    component="p"
                                    className={classes.hu}
                                >
                                    Ein umfassenden HU Vorab-Check sowie die
                                    unkomplizierte HU/AU Abnahme in Hamburg.
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Link>
                <Link
                    component={RouterLink}
                    to="/diagnose"
                    style={{ textDecoration: "none" }}
                >
                    <Card className={classes.card}>
                        <CardActionArea>
                            <CardMedia
                                className={classes.media}
                                image={diagnose}
                            />
                            <CardContent>
                                <Typography
                                    gutterBottom
                                    variant="h6"
                                    component="h4"
                                >
                                    DIAGNOSE
                                </Typography>
                                <Typography
                                    variant="body2"
                                    color="textSecondary"
                                    component="p"
                                    className={classes.diagnose}
                                >
                                    Unser Diagnose- und Reparaturcomputer
                                    enthält Zugangsdaten für alle Pkw und
                                    Baujahre.
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Link>
                <Link
                    component={RouterLink}
                    to="/reifen"
                    style={{ textDecoration: "none" }}
                >
                    <Card className={classes.card}>
                        <CardActionArea>
                            <CardMedia
                                className={classes.media}
                                image={reifen}
                            />
                            <CardContent>
                                <Typography
                                    gutterBottom
                                    variant="h6"
                                    component="h4"
                                >
                                    REIFEN
                                </Typography>
                                <Typography
                                    variant="body2"
                                    color="textSecondary"
                                    component="p"
                                    className={classes.reifen}
                                >
                                    Wir bieten Ihnen Sommer-, Winter- und
                                    Ganzjahresreifen namhafter Hersteller.
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Link>
                <Link
                    component={RouterLink}
                    to="/klimaanlagen"
                    style={{ textDecoration: "none" }}
                >
                    <Card className={classes.card}>
                        <CardActionArea>
                            <CardMedia
                                className={classes.media}
                                image={aircondition}
                            />
                            <CardContent>
                                <Typography
                                    gutterBottom
                                    variant="h6"
                                    component="h4"
                                    className={classes.klima}
                                >
                                    KLIMAANLAGEN
                                </Typography>
                                <Typography
                                    variant="body2"
                                    color="textSecondary"
                                    component="p"
                                    className={classes.klima}
                                >
                                    Autoklimaanlagen müssen regelmäßig gewartet
                                    werden.
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Link>
            </Grid>
        </div>
    );
}

//----------------Material-ui----------------------

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        justifyContent: "center",
        alignItems: "flex-start",
        textAlign: "center",
        flexBasis: "0%",
        backgroundColor: "#eeeeee",
        boxShadow: "0",
    },

    card: {
        maxWidth: 200,
        maxHeight: 300,
        backgroundColor: "#eeeeee",
        boxShadow: "none",
        "&:hover": {
            // boxShadow: "0px 5px 15px 10px rgba(0,0,0,0.3)",
            backgroundColor: "#61dafb",
            textDecoration: "none",
            boxShadow:
                "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;gba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 40px",
        },
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
    meister: { lineHeight: 1.6 },
    inspektion: { lineHeight: 2.1 },
    hu: { lineHeight: 1.6 },
    diagnose: { lineHeight: 1.6 },
    reifen: { lineHeight: 1.6 },
    klima: { lineHeight: 2 },
}));
