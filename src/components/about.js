import React from "react";
import { Grid, makeStyles, Paper, Typography, Divider , Link} from "@material-ui/core";
import { FaHtml5,FaReact, FaNpm, FaNode, FaCss3Alt, FaGitSquare , FaGithub, FaLinkedin, FaTwitter} from "react-icons/fa";

import { IoLogoJavascript } from "react-icons/io";
import { DiPostgresql } from "react-icons/di";
import me from '../images/me.jpg'

const styles = makeStyles(theme => ({
  lside: {
    margin: "15px 0px",
    padding: "15px",
    "@media (min-width:600px)": {
      fontSize: "1.5rem"
    }
  },
  shit: {
    display: 'block'
  },

  rside: {
    margin: "15px 0px",
    padding: "15px"
  },
  headers: {
    [theme.breakpoints.down("xs")]: {
      fontSize: "40px"
    },
    fontFamily: "Dancing Script",
    padding: '5px',
    fontWeight: "bold"
  },
  para: {
    
    textAlign: "justify",
    padding: "5px",
    [theme.breakpoints.down("xs")]: {
      fontSize: "18px"
    },
    fontFamily: "Nunito",
    fontWeight: "600"
  },
  witkamp: {
    textDecoration: "none",
    color: "#655636",
  },
  udemy: {
    textDecoration: "none",
    color: "red"
  },
  icon: {
    width: "75px",
    height: "73px",
    color: "red",
    marginTop: "10px",
    [theme.breakpoints.down("md")]: {
      height: "60px"
    },
  },
  avatar:{
      width: '100px',
      height: '150px',
      borderRadius: '50px'
  },
  hi:{
      fontFamily: "Dancing Script",
      padding: '20px',
      textAlign: 'center'
  },
  email:{
    fontFamily: 'Nunito',
    padding: '20px',
    textAlign: 'center',
  },
  social:{
    height: '75px',
    width: '50px',
    textDecoration: 'none'
  },
  a:{
    textDecoration: 'none'
  }
}));



export default HomePage => {
  const classes = styles();
  return (
    <Grid container spacing={2}>
      <Grid item sm={4} xs={12}>
        <Paper className={classes.lside}>
          <Grid container>
            <Grid item xs={12} align="center">
              <img src={me} className={classes.avatar} alt="Adham" />
            </Grid>
            <Grid item xs={12}>
              <Typography className={classes.hi} variant="h5" color="secondary">
                Hello and Welcome !
              </Typography>
            </Grid>
          </Grid>
        </Paper>
        <Paper className={classes.lside}>
          <Grid container>
            <Grid item xs={12}>
              <a href="mailto: contact@adhamabohasson.com">
                <Typography
                  className={classes.email}
                  variant="h6"
                  color="primary"
                >
                  contact@adhamabohasson.com
                </Typography>
              </a>
            </Grid>
            <Grid container>
              <Grid item xs={4} align="center">
                <Link
                  href="https://github.com/AdhamAH"
                  rel="noopener noreferrer"
                  target="_blank"
                  underline="none"
                >
                  <FaGithub className={classes.social} color="black" />
                </Link>
              </Grid>
              <Grid item xs={4} align="center">
                <Link
                  href="https://twitter.com/Adam_A_H"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <FaTwitter className={classes.social} color="#3291DA" />
                </Link>
              </Grid>
              <Grid item xs={4} align="center">
                <Link
                  href="https://www.linkedin.com/in/aahsoftware/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <FaLinkedin className={classes.social} color="#2877B5" />
                </Link>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
      <Grid item sm={8} xs={12}>
        <Paper className={classes.rside}>
          <Typography
            variant="h4"
            align="center"
            color="secondary"
            className={classes.headers}
          >
            About me
          </Typography>
          <Typography
            variant="body1"
            color="textSecondary"
            paragraph={true}
            className={classes.para}
          >
            I am Syrian living in the Netherlands. Since I got my first PC in
            1999 I become interested in anything related to the IT World. I
            always wanted to know how things made, especially websites and apps.
            Started to focus on that and here I am now. Couldn't study what I
            want in Syria but now I am trying to do so. Check out my{" "}
            <Link
              href="https://www.udemy.com/user/adam-samuel-5/"
              rel="noopener noreferrer"
              target="_blank"
              className={classes.udemy}
              color="red"
              underline="none"
            >
              Udemy
            </Link>{" "}
            profile. Currently, I work as a dishwasher in{" "}
            <Link
              href="https://witkamp.com/"
              rel="noopener noreferrer"
              target="_blank"
              className={classes.witkamp}
              underline="none"
            >
              Witkamp
            </Link>{" "}
            while I am trying to find a job with what I love and I know.
          </Typography>
          <Divider />
          <Typography
            variant="h4"
            align="center"
            color="secondary"
            className={classes.headers}
          >
            What I know
          </Typography>
          <Grid container align="center">
            <Grid item xs={3}>
              <FaHtml5 className={classes.icon} color="#DE4B30" />
            </Grid>
            <Grid item xs={3}>
              <FaCss3Alt className={classes.icon} color="#254BDE" />
            </Grid>
            <Grid item xs={3}>
              <IoLogoJavascript className={classes.icon} color="#F2C445" />
            </Grid>
            <Grid item xs={3}>
              <FaNpm className={classes.icon} />
            </Grid>
          </Grid>
          <Grid container align="center">
            <Grid item xs={3}>
              <FaReact className={classes.icon} color="#5AD8F9" />
            </Grid>
            <Grid item xs={3}>
              <FaNode className={classes.icon} color="#5C9956" />
            </Grid>
            <Grid item xs={3}>
              <DiPostgresql className={classes.icon} color="#336791" />
            </Grid>
            <Grid item xs={3}>
              <FaGitSquare className={classes.icon} color="#3F2F0A" />
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  )
}
