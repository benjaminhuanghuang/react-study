import React from "react";
// @material-ui
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Paper } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  grid: {
    width: "100%",
    margin: "0px",
  },
  paper:{
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    background: theme.palette.success.light,
  }
}));

function Home() {
  const classes = useStyles();
  return (
    <Grid container spacing={2} className={classes.grid}>
      <Grid item xs={12} md={6}>
        <Paper className={classes.paper}>small: 6, middle:6</Paper>
      </Grid>
      <Grid item xs={12} md={6}>
        <Paper className={classes.paper}>small: 6, middle:6</Paper>
      </Grid>
      <Grid item xs={3} >
        <Paper className={classes.paper}>small: 3</Paper>
      </Grid>
      <Grid item xs={3} >
        <Paper className={classes.paper}>small: 3</Paper>
      </Grid>
    </Grid>
  );
}

export default Home;
