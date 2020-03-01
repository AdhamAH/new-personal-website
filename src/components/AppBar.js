import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { Link } from "@material-ui/core"
import Contact from './contact'
function ElevationScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const useStyles = makeStyles(theme => ({
  buttons: {
    [theme.breakpoints.down("xs")]: {
      fontSize: "12px"
    },
  }
}));


export default function ButtonAppBar(props) {
  const classes = useStyles();

  return (
    <Fragment>
      <ElevationScroll {...props}>
        <AppBar color="primary">
          <Toolbar>
            <div style={{flex: 1}}>
              <Link href="/#about" style={{ color: "white" }} underline="none">
                <Button color="inherit" className={classes.buttons}>About</Button>
              </Link>

              <Link
                href="/#projects"
                style={{ color: "white" }}
                underline="none"
              >
                <Button color="inherit" className={classes.buttons}>Projects</Button>
              </Link>
              <Link
                href="/#tools"
                style={{ color: "white" }}
                underline="none"
              >
                <Button color="inherit" className={classes.buttons}>Use&speak</Button>
              </Link>
            </div>
            <Button color="inherit">
              <Contact />
            </Button>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Toolbar />
    </Fragment>
  )
}