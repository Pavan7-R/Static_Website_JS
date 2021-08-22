import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import logo from './logo.jpg';
import { lightBlue } from '@material-ui/core/colors';



const Header = makeStyles((theme) => ({
  //   root: {
  //   flexGrow: 0,
    
  //  },
  paper: {
    padding: theme.spacing(1),
    margin: 'auto',
    maxWidth: 10000,
    backgroundColor: "lightBlue"
  },
  image: {
    width: 200,
    height: 200,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '80%',
   
  },
  
  

}));


export default function ComplexGrid() {
  const classes = Header();
  

  return (
  
    <div className={classes.root} >
      <Paper className={classes.paper}>
        <Grid container spacing={0} xs={12}>
          
          <Grid item xs={8}>
            <ButtonBase className={classes.image}>
              <img className={classes.img}  src={logo} />
            </ButtonBase>
          </Grid>
          <Grid item xs={2} sm container>
            <Grid item xs container direction="column"  spacing={0} justify="flex-end" >
              <Grid item xs={6} >
                <Typography gutterBottom variant="h3" color="primary" justify="flex-end">
                  Course Essentials
                </Typography>
                <Typography variant="subtitle2" gutterBottom color="primary" justify="flex-end" font-family='Roboto'>
                A Different Kind of Company.
                </Typography>
                <Typography variant="subtitle2" gutterBottom color="primary" justify="flex-end">
                 A Different Kind of Online Courses.
                </Typography>
              
              </Grid>
            
            </Grid>
            
          </Grid>
        </Grid>
     
  
      </Paper>
    </div>
    
       
  );
}



