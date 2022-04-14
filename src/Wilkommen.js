import React from "react";
import {
    makeStyles,
    Typography,
    Card,
    CardContent,
    CssBaseline,
    Grid,
} from "@material-ui/core";

export default function ButtonAppBar() {
    const classes = useStyles();

    return (
        <div>
            <CssBaseline />
            <Grid container className={classes.root}>
                <Card className={classes.card1}>
                    <CardContent>
                        <Typography
                            gutterBottom
                            variant="h4"
                            component="h2"
                            className={classes.title}
                        >
                            WILLKOMMEN BEI KFZ MEISTERBETRIEB WAISI{" "}
                        </Typography>
                        <Typography
                            variant="body2"
                            color="textSecondary"
                            component="p"
                            className={classes.text}
                        >
                            Die MEISTERBETRIEB WAISI bietet Ihnen einen
                            umfassenden Reparatur- und Wartungsservice für Ihr
                            Auto in Hamburg. Unsere Autowerkstatt erledigt
                            sämtliche Arbeiten rund um Ihr Auto flexibel und
                            zügig. Zum Leistungsangebot unserer Autowerkstatt
                            gehören Instandsetzung sämtlicher Kfz-Typen,
                            Klimaservice, Inspektionen nach Herstellervorgaben.
                            Regelmäßige Inspektionen steigern die Sicherheit,
                            Zuverlässigkeit und Wirtschaftlichkeit Ihres Autos.
                            Regelmäßige Inspektionen sichern den Werterhalt
                            Ihres Autos und schonen so Ihren Geldbeutel.
                        </Typography>
                        <Typography
                            gutterBottom
                            variant="h4"
                            component="h2"
                            className={classes.title}
                        >
                            Ihre Autowerkstatt in Hamburg:
                        </Typography>
                        <Typography
                            variant="body2"
                            color="textSecondary"
                            component="p"
                            className={classes.text}
                        >
                            Kfz-Service • Fahrzeugscheiben • Inspektionen •
                            Motor-Diagnose • Reifen / Felgen • Reifeneinlagerung
                            • Autoklima • Stoßdämpfer{" "}
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
        </div>
    );
}

//----------------Material-ui----------------------

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        flexBasis: "0%",
        backgroundColor: "#dddddd",
        boxShadow: "0",
        paddingTop: "2rem",
    },

    card1: {
        maxWidth: "60vw",
        minHeight: "70vh",
        backgroundColor: "#dddddd",
        boxShadow: "none",
        [theme.breakpoints.down("xs")]: {
            maxWidth: "90%",
        },
    },

    typography: {
        display: "flex",
        bgcolor: "lightgreen",
        alignItems: "center",
        justifyContent: "center",
    },
    text: {
        fontSize: "18px",
        align: "justify",
        letterSpacing: "0.016em",
        lineHeight: 2.5,
        [theme.breakpoints.down("xs")]: {
            fontSize: [16, "!important"],
        },
    },
    title: {
        color: "#00bad4",
        [theme.breakpoints.down("xs")]: {
            fontSize: [22, "!important"],
        },
    },
}));
