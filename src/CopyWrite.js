import React from "react";

// import { Link } from "@mui/material";
import { makeStyles, Grid, Card, CardContent, Link } from "@material-ui/core";

export default function CopyWrite() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container className={classes.root}>
                <Card className={classes.card}>
                    <CardContent>
                        {" "}
                        Design by @{" "}
                        <Link
                            href="www.rezahajipour.com"
                            underline="none"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            REZA HAJIPOUR
                        </Link>
                    </CardContent>{" "}
                </Card>
                <Card className={classes.card}>
                    <CardContent>
                        {" "}
                        <Link href="/impressum" underline="none">
                            IMPRESSUM
                        </Link>
                    </CardContent>{" "}
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
        backgroundColor: "#221f1f",
        boxShadow: "0",
    },

    card: {
        maxWidth: 400,
        maxHeight: 300,
        backgroundColor: "#221f1f",
        boxShadow: "none",
        color: "#FFFFFF",
    },
}));
