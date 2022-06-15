import React from "react";
import {
    makeStyles,
    Typography,
    Card,
    CardContent,
    CardMedia,
    Grid,
} from "@material-ui/core";
import image from "../images/back-klimaanlage.jpeg";

function Klimaanlagen() {
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
                            Klimaanlage
                        </Typography>
                        <Typography>
                            Eine Klimaanlage ist sowohl im Sommer wie auch im
                            Winter angenehm zu verwenden. In der heißen
                            Jahreszeit sorgt sie für kalte Luft und in der
                            kalten Jahreszeit übernimmt sie die Trocknung der
                            Luft, damit die Scheiben nicht beschlagen.
                            <br />
                            Bei uns können Sie eine professionelle Kontrolle der
                            Klimaanlage in Ihrem Fahrzeug durchführen lassen.
                            Außerdem werden wir die notwendigen Servicearbeiten
                            erledigen, damit wieder alles ordnungsgemäß
                            funktioniert.
                            <br />
                            Wir überprüfen Ihre Klimaanlage auf die
                            Funktionstüchtigkeit. Außerdem führen wir eine
                            Wartung durch, die regelmäßig für jede Klimaanlage
                            empfohlen wird. Bei einer defekten Klimaanlage in
                            Ihrem Fahrzeug können wir dieses Problem ebenfalls
                            beheben.
                            <br />
                            Wir nehmen nämlich jegliche Reparaturen vor, damit
                            Sie wieder kühle und trockene Luft in Ihrem Fahrzeug
                            haben.
                            <br />
                            In unserer KFZ-Meisterwerkstatt wird die Klimaanlage
                            in Ihrem Auto auf Dichtheit mit Formiergas
                            überprüft. Bei ständigem Betrieb der Anlage sammeln
                            sich über die Zeit viele Viren an. Deshalb werden
                            wir eine Desinfektion des Verdampfers vornehmen.
                            <br />
                            Außerdem können Sie bei uns Ihre Klimaanlage, mit
                            dem Kältemittel R134a oder mit dem Kältemittel
                            1234yf je nach Fahrzeugtyp, befüllen lassen.
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
        </section>
    );
}

export default Klimaanlagen;

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
            height: "110vh",
            width: "100vw",
        },
    },
    media: {
        padding: theme.spacing(1),
        paddingTop: "86.25%", // 16:9
    },
}));
