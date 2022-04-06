import React from "react";
import { makeStyles, Typography } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import CardMedia from "@material-ui/core/CardMedia";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import image from "./images/auto-b1.png";

function Ol() {
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
                            Öl-Service
                        </Typography>
                        <Typography>
                            Regelmäßiger Ölwechsel sorgt für ein langes
                            Motorleben. Wir verwenden nur Öle führender
                            Markenhersteller sowie Filter in
                            Erstausrüsterqualität.
                            <br />
                            <br />
                            <strong>Unsere Aufgaben beim Ölwechsel ?</strong>
                            <br />
                            • Unterfahrschutz abbauen <br />
                            • Altöl ablassen <br />
                            • Altöl entsorgen <br />
                            • Alte Ölfiler ausbauen <br />
                            • Neue Ölfilter einbauen <br />
                            • Frisches Öl in den Motor füllen <br />
                            • ggf Ölablasschrauben erneuern ink. Dichtung <br />
                            • Unterfahrschutz einbauen <br />
                            • Ölwechselintervallanzeige zurücksetzten <br />
                            • Ölschild im Motorraum anbringen <br />• nochmals
                            Ölstand überprüfen
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
        </section>
    );
}

export default Ol;

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
