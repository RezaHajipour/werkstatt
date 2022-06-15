import React from "react";
import {
    makeStyles,
    Typography,
    Card,
    CardContent,
    CardMedia,
    Grid,
} from "@material-ui/core";
import image from "../images/back-Getriebe.jpeg";

function Getriebe() {
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
                            Getriebe
                        </Typography>
                        <Typography>
                            Bei einer Getriebe Instandsetzung wird das komplette
                            Getriebe zerlegt.
                            <br />
                            Wir von der Autowerkstatt Hammerbrook können das
                            komplette Getriebe prüfen, reinigen, zerlegen und
                            nur einzelne defekte oder verschlissene Zahnräder
                            sowie Schaltwellen bzw. Schaltventile tauschen.
                            Anschließend wird das Getriebe unter
                            Berücksichtigung kleiner eventuell auftretender,
                            technischen Änderungen, wieder zusammengebaut. Nach
                            Wiedereinbau wird das Getriebe und alle relevanten
                            Komponenten auf Ihre volle Funktion geprüft.
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
        </section>
    );
}

export default Getriebe;

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
