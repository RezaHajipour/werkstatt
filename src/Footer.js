import React from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles, Typography} from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    justifyContent : 'space-around',  
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
    display:"flex",
    bgcolor:"lightgreen",
    alignItems:"center",
    justifyContent:"center",
  },
  media: {
    paddingTop: "70%",
    backgroundSize: "60%",
  },
}));


export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container className={classes.root} >
       <Card className={classes.card}>
         <CardContent>
                   <Typography gutterBottom variant="h6" component="h4">
                   KFZ MEISTERBETRIEB WAISI
                   </Typography>
                   <Typography variant="body2" color="textSecondary" component="p">
                   Billwerder Steindamm 26
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                    20537 Hamburg
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                    St.-Nr 46/258/03611
                    </Typography>
          </CardContent>
       </Card>

       <Card className={classes.card}>
         <CardContent>
                   <Typography gutterBottom variant="h6" component="h4">
                   Bankverbindung: Hamburger Sparkasse                   </Typography>
                   <Typography variant="body2" color="textSecondary" component="p">
                   IBAN: DE13 2005 0550 1500 8175 54
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                    SWIFT / BIC: HASPDEHHXXX
                    </Typography>
          </CardContent>
       </Card>

       <Card className={classes.card}>
         <CardContent>
                   <Typography gutterBottom variant="h6" component="h4">
                   ÖFFNUNGSZEITEN  
                   </Typography>
                   <Typography variant="body2" color="textSecondary" component="p">
                   Montag - Freitag: 9:00--17:00
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                    Samstag: 8:00-13:00 
                    </Typography>
          </CardContent>
       </Card>

       <Card className={classes.card}>
         <CardContent>
                   <Typography gutterBottom variant="h6" component="h4">
                   KONTAKT:  
                   </Typography>
                   <Typography variant="body2" color="textSecondary" component="p">
                   E-Mail: meisterbetriebwaisi@gmail.com
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                    Mobile: 0176 45 88 0462
                    </Typography>
          </CardContent>
       </Card>
      </Grid>
    </div>
  );
}