import React, { Fragment } from "react"

import {
  Grid,
  makeStyles,
  Paper,
  Typography,
  Divider,
  Link,
  Container,
  Box,
  Popover,
  GridListTile,
  GridList,
} from "@material-ui/core"
import VsCode from "../images/vscode.svg"
import Material from "../images/material-ui.png"
import Gatspy from "../images/gatsby-icon.png"
import Ps from '../images/Photoshop_CC_icon.png'
import Express from "../images/express.svg"
import Terminal from '../images/icon-terminal-png-5.png'
import { GoTerminal } from "react-icons/go"
import { DiPhotoshop } from "react-icons/di"
import Image from '@material-ui/core'

const images = [
  {
    id: 1,
    image: VsCode,
    text: "Visual Studio Code",
  },
  {
    id: 2,
    image: Material,
    text: "Material-UI",
  },
  {
    id: 3,
    image: Gatspy,
    text: "Gatspy.js",
  },
  {
    id: 4,
    image: Ps,
    text: "Photoshop",
  },
  {
    id: 5,
    image: Terminal,
    text: "Terminal",
  },
  {
    id: 6,
    image: Express,
    text: "Express.js",
  },
]

const styles = makeStyles(theme => ({
  icons: {
    height: "80px",
    width: "80px",
  },
  head: {
    width: "100%",
    height: "55px",
    backgroundColor: "#66bb6a",
    textAlign: "center",
    color: "white",
    marginTop: "50px",

    fontFamily: "Dancing Script",
    fontSize: "40px",
  },
  box: {
    marginTop: "20px",
  },
  boxIcon: {
    width: "150px",
    marginTop: '20px'
  },
  lang: {
    margin: '10px',

    fontFamily: "Dancing Script",
    fontSize: "30px",
  },
  level: {
    padding: '5px',
    textJustify: 'center',

    fontWeight: '600',
    fontFamily: "Nunito",
  }
}))

export default () => {


  const classes = styles()

  return (
    <Box id='tools'>
      <Box>
        <Typography variant="h5" className={classes.head}>
          {" "}
          I USE & SPEAK
        </Typography>
      </Box>
      <Grid container justify="space-between">
        <Grid item xs={12} sm={6} align='center'>
          <Container className={classes.box}>
            <Typography variant="h5" align="center" className={classes.head}>
              What I use
            </Typography>
            <Grid container lg={12} align="center">
              {images.map(({ id, image, text }) => {
                return (
                  <Grid item lg={4} className={classes.boxIcon} >
                    <img key={id} src={image} className={classes.icons} ></img>
                    <Typography color="secondary">{text}</Typography>
                  </Grid>
                )
              })}
            </Grid>
          </Container>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Container>
            <Typography variant="h5" align="center" className={classes.head}>
              What I speak
            </Typography>
            <Grid container justify="space-between" direction="column">
              <Grid item align="center">
                <Typography
                  className={classes.lang}
                  color="secondary"
                  variant="h5"
                >
                  العربية
                </Typography>
                <Typography color="textSecondary"
                  className={classes.level}>
                My Mother Langauge
                </Typography>
                <Typography color="textSecondary"
                  className={classes.level}>
                 لغتي الأم
                </Typography>
              </Grid>
              <Grid item align="center">
                <Typography
                  className={classes.lang}
                  color="secondary"
                  variant="h5"
                >
                  English
                </Typography>
                <Typography
                  color="textSecondary"
                  className={classes.level}
                  paragraph
                >
                  Since few years past I started to use English more than
                  Arabic. I started to think more in English as much as I think
                  in Arabic
                </Typography>
              </Grid>
              <Grid item align="center">
                <Typography
                  className={classes.lang}
                  color="secondary"
                  variant="h5"
                >
                  Nederlands
                </Typography>
                <Typography
                  color="textSecondary"
                  className={classes.level}
                  paragraph
                >
                  Het is nog niet perfect maar zeker dat ik de neviu voor werk
                  en daglijks leven heb.
                </Typography>
              </Grid>
            </Grid>
          </Container>
        </Grid>
      </Grid>
    </Box>
  )
}
