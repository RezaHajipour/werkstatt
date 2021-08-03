import * as React from 'react';
import "./Leistungen.css";
import { makeStyles, Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import CardMedia from '@material-ui/core/CardMedia';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import inspektion from "./images/1-inspektion.png";
import meisterbetrieb from "./images/2-meisterbetrieb.png";
import huAu from "./images/4-huAu.png";
import diagnose from "./images/5-diagnose.png";
import reifen from "./images/6-reifen.png";
import aircondition from "./images/3-aircondition.png";


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    justifyContent : 'center',  
    alignItems: "flex-start", 
    // maxWidth: 545,
     textAlign: "center",
     flexBasis: "0%",
    //  marginBottom: "2rem",
     backgroundColor: "#eeeeee",
     boxShadow: "0",
  },

  card: {
    maxWidth: 200,
    maxHeight: 300,
    backgroundColor: "#eeeeee",
    boxShadow: "none",
  },
  
  
  typography: {
    display:"flex",
    bgcolor:"lightgreen",
    alignItems:"center",
    justifyContent:"center",
  },
  media: {
    // padding: theme.spacing(1),
    paddingTop: "70%",
    backgroundSize: "60%",
  },
}));

export default function NestedGrid() {
  const classes = useStyles();


  return (
          <div > 
      <Grid container className={classes.root} >

      <Card className={classes.card}>
            <CardActionArea>
            <CardMedia
              className={classes.media} image={meisterbetrieb} />
                <CardContent>
                   <Typography gutterBottom variant="h6" component="h4">
                   MEISTERBETRIEB
                   </Typography>
                   <Typography variant="body2" color="textSecondary" component="p">
                   In unserer Autowerkstatt in Hamburg wird Ihr Pkw professionell gewartet bzw. instand gesetzt.
                    </Typography>
                </CardContent>
              </CardActionArea>
            </Card>

      <Card className={classes.card} >
            <CardActionArea>
            <CardMedia
              className={classes.media} image={inspektion} />
                <CardContent>
                   <Typography gutterBottom variant="h6" component="h4">
                   INSPEKTION
                   </Typography>
                   <Typography variant="body2" color="textSecondary" component="p">
                   Inspektionen in Hamburg wir prüfen Ihr Fahrzeug auf Herz und Nieren.
                    </Typography>
                </CardContent>
                </CardActionArea>
            </Card>
            <Card className={classes.card}>
            <CardActionArea>
            <CardMedia
              className={classes.media} image={huAu} />
                <CardContent>
                   <Typography gutterBottom variant="h6" component="h4">
                   HU/AU
                   </Typography>
                   <Typography variant="body2" color="textSecondary" component="p">
                   Ein umfassenden HU Vorab-Check sowie die unkomplizierte HU/AU Abnahme in Hamburg.
                    </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
            <Card className={classes.card}>
            <CardActionArea>
            <CardMedia
              className={classes.media} image={diagnose} />
                <CardContent>
                   <Typography gutterBottom variant="h6" component="h4">
                   DIAGNOSE
                   </Typography>
                   <Typography variant="body2" color="textSecondary" component="p">
                   Unser Diagnose- und Reparaturcomputer enthält Zugangsdaten für alle Pkw und Baujahre.
                    </Typography>
                </CardContent>
              </CardActionArea>
            </Card> 

            <Card className={classes.card}>
            <CardActionArea>
            <CardMedia
              className={classes.media} image={reifen} />
                <CardContent>
                   <Typography gutterBottom variant="h6" component="h4">
                    REIFEN/FELGEN
                   </Typography>
                   <Typography variant="body2" color="textSecondary" component="p">
                   Wir bieten Ihnen Sommer-, Winter- und Ganzjahresreifen namhafter Hersteller.
                    </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
            <Card className={classes.card}>
            <CardActionArea>
            <CardMedia
              className={classes.media} image={aircondition} />
                <CardContent>
                   <Typography gutterBottom variant="h6" component="h4">
                   AUTOKLIMA
                   </Typography>
                   <Typography variant="body2" color="textSecondary" component="p">
                   Autoklimaanlagen müssen regelmäßig gewartet werden.
                    </Typography>
                </CardContent>
              </CardActionArea>
            </Card>  
      </Grid>
    </div>
  );
}