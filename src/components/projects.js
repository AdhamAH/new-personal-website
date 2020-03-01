import React, { Fragment } from "react"
import PropTypes from "prop-types"
import SwipeableViews from "react-swipeable-views"
import { makeStyles } from "@material-ui/core/styles"
import AppBar from "@material-ui/core/AppBar"
import Grid from "@material-ui/core/Grid"
import Tabs from "@material-ui/core/Tabs"
import Tab from "@material-ui/core/Tab"
import Typography from "@material-ui/core/Typography"
import Box from "@material-ui/core/Box"
import { Button } from "@material-ui/core"
import { FaArrowCircleRight, FaGithub } from 'react-icons/fa'
import {Link} from "@material-ui/core"

import bhq from "../images/bhq.png"
import star from "../images/star.png"
import syrian from "../images/syrian.png"

const projects = [
  {
    id: 1,
    image: syrian,
    name: "Syrian Foods",
    content:
      "This is still a working progress. Planning to make it as an online shop. Now working on the shop page and the shop cart right now and will update as soon as finished",
    github: "https://github.com/AdhamAH/syrianfoods",
    live: "https://test.adhamabohasson.com",
  },
  {
    id: 2,
    image: bhq,
    name: "BHQ Transport",
    content:
      "Made for a local company. Still waiting for the premission to deploay. If you viste you will find a very simple page but I provided a preview of the final build. ",
    live: "https://www.bhqpreview.adhamabohasson.com",
    github: "https://github.com/AdhamAH/bhqtransport",
  },
  {
    id: 3,
    image: star,
    name: "StarWars Characters",
    content:
      "Was fun to build this one. It was a little project to train my self on using react.js. Also it shows one of my faverote movies",
    live: "https://adhamah.github.io/starwars-charachters/",
    github: "https://github.com/AdhamAH/starwars-charachters",
  },
]

function TabPanel(props) {
  const { children, value, index } = props

  return (
    <Typography component="div" role="tabpanel">
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  )
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
}

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    marginTop: '70px'
  },
  appbar: { justifyContent: "center" 
  },
  tabs: {

    fontFamily: "Dancing Script",
    fontSize: '30px',
    [theme.breakpoints.down("xs")]: {
  fontSize: "20px"
},
  },
  tab: {
    marginTop: "75px"
    
  },
  headers: {
    padding: "5px",
    fontFamily: "Dancing Script",
    fontSize: '30px',
    textAlign: "center"
  },
  content: {
    padding: "25px",
    fontSize:'22px',
    fontFamily: "Nunito",
    textAlign: "center" 
  },
  bottuns: {
    width: "250px", margin: "10px 10px"
  },
}))

export default function FullWidthTabs() {
  const classes = useStyles()
  const [value, setValue] = React.useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  const handleChangeIndex = index => {
    setValue(index)
  }

  return (
    <Fragment>
      <div id="projects"></div>
      <div className={classes.root}>
        <AppBar
          className={classes.appbar}
          position="static"
          color="primary"
        >
          <Tabs
            value={value}
            onChange={handleChange}
            variant="fullWidth"
            aria-label="full width tabs example"
          >
            {projects.map(({ id, name }) => {
              return <Tab key={id} label={name}
                className={classes.tabs}/>
            })}
          </Tabs>
        </AppBar>
        <SwipeableViews
          axis={"rtl" ? "x" : "x-reverse"}
          index={value}
          onChangeIndex={handleChangeIndex}
        >
          {projects.map(({ id, image, name, content, github, live }) => {
            return (
              <TabPanel value={id} index={id}>
                <Grid container className={classes.tab}>
                  <Grid container xs={12}>
                    <Grid item md={5}>
                      <Typography
                        color="secondary"
                        className={classes.headers}
                      >
                        {name}
                      </Typography>
                      <Typography
                        color="textSecondary"
                        className={classes.content}
                      >
                        {content}
                      </Typography>
                      <Grid container>
                        <Grid xs={12} sm={6} lg={6} align="center">
                          <Button
                            className={classes.bottuns}
                            variant="outlined"
                            color="primary"
                            startIcon={<FaGithub color="black" />}
                          >
                            <Link
                              color="secondary"
                              style={{ textDecoration: "none" }}
                              href={github}
                              rel="noopener noreferrer"
                              target="_blank"
                            >
                              {" "}
                              Check the code
                            </Link>
                          </Button>
                        </Grid>
                        <Grid item xs={12} sm={6} lg={6} align="center">
                          <Button
                            className={classes.bottuns}
                            variant="outlined"
                            color="primary"
                            startIcon={<FaArrowCircleRight />}
                          >
                            <Link
                              color="secondary"
                              style={{ textDecoration: "none" }}
                              href={live}
                              rel="noopener noreferrer"
                              target="_blank"
                            >
                              Live Preview{" "}
                            </Link>
                          </Button>
                        </Grid>
                        <Grid item xs={12}></Grid>
                      </Grid>
                    </Grid>
                    <Grid item md={7}>
                      <img
                        src={image}
                        alt="project"
                        style={{ boxShadow: "0px 0px 3px 0px grey" }}
                      />
                    </Grid>
                  </Grid>
                </Grid>
              </TabPanel>
            )
          })}
        </SwipeableViews>
      </div>
    </Fragment>
  )
}
