import React from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles, Typography} from '@material-ui/core';
import wilkomme from "./images/wilkomme.png";
import CardMedia from '@material-ui/core/CardMedia';
import Box from '@material-ui/core/Box';





const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    justifyContent : 'center',  
    alignItems: "center",
     textAlign: "center",
     flexBasis: "0%",
     backgroundColor: "#dddddd",   
     boxShadow: "0",
     paddingTop: "1rem",
  },

  card1: {
    maxWidth: "50%",
    minHeight: "100%",
    maxHeight: 500,
    backgroundColor: "#dddddd", 
    boxShadow: "none",
  },
 
  
  typography: {
    display:"flex",
    bgcolor:"lightgreen",
    alignItems:"center",
    justifyContent:"center",
  },

  image: {
    maxWidth: "30%",
  },
}));


export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container className={classes.root} >

       <Card className={classes.card1}>
         <CardContent>
                   <Typography gutterBottom variant="h4" component="h2">
                   WILLKOMMEN BEI AUTO MEISTERBETRIEB WAISI </Typography>
                   <Typography variant="body2" color="textSecondary" component="p">
                   Die AUTO MEISTERBETRIEB WAISI bietet Ihnen einen umfassenden Reparatur- und Wartungsservice für Ihr Auto in Hamburg. Unsere Autowerkstatt erledigt sämtliche Arbeiten rund um Ihr Auto flexibel und zügig. Zum Leistungsangebot unserer Autowerkstatt gehören Instandsetzung sämtlicher Kfz-Typen, Klimaservice, Inspektionen nach Herstellervorgaben. Regelmäßige Inspektionen steigern die Sicherheit, Zuverlässigkeit und Wirtschaftlichkeit Ihres Autos. Regelmäßige Inspektionen sichern den Werterhalt Ihres Autos und schonen so Ihren Geldbeutel.
                    </Typography>
                    <Typography gutterBottom variant="h6" component="h4">
                    Ihre Autowerkstatt in Hamburg:</Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                    Kfz-Service • Fahrzeugscheiben • Inspektionen • Motor-Diagnose • Reifen / Felgen • Reifeneinlagerung • Autoklima • Stoßdämpfer                    </Typography>
          </CardContent>
       </Card>


       {/* <Card className={classes.card2} >
       <CardMedia className={classes.media} image={wilkomme}  />
        <img src={wilkomme} className={classes.media} />
        </Card> */}

        {/* <Card>
          <CardMedia image={wilkomme} />
        </Card> */}

<img src={wilkomme} className={classes.image} />



      </Grid>
    </div>
  );
}





