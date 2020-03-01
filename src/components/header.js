import React from 'react'
import { makeStyles, Grid, Typography } from "@material-ui/core";
import logo from "../images/isolated-monochrome-black.svg"
import ButtonAppBar from './AppBar'

const styles = makeStyles(theme => ({
  img: {
    width: "120px",
    height: " 120px",
        margin: "5px 5px",
  },
  container: {
    backgroundColor: "#4caf50",
  },
  header: {
    fontFamily: "Dancing Script",
  },
}))

export default Head =>{
    const classes = styles()
    return (
      <div id="about">
        <ButtonAppBar />
        <Grid
          container
          className={classes.container}
          alignItems="center"
          direction="row"
        >
          <Grid container xs={8} sm={3} lg={4} justify="flex-end">
            <img src={logo} alt="logo" className={classes.img}></img>
          </Grid>
          <Grid item xs={12} sm={9} lg={8}>
            <Typography
              className={classes.header}
              align="center"
              variant="h3"
              color="secondary"
            >
              Thinking&Making
            </Typography>
          </Grid>
        </Grid>
      </div>
    )
}