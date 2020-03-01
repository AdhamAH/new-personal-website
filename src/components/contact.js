import React, { Fragment } from "react"
import axios from "axios"
import { withStyles } from "@material-ui/core/styles"
import { MdDone, MdSmsFailed } from "react-icons/md"

import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  TextField,
  DialogActions,
  Button,
  Snackbar,
  SnackbarContent,
  Box,
  IconButton,
  Typography,
} from "@material-ui/core"

const styles = {
  success: {
    background: "#66bb6a",
  },
  fail: {
    background: "red",
  },
  error: {
    background: "#ef7c7e",
    margin: "10px",
  },
  email: {
    fontSize: "13px",

    fontWeight: '700',
    fontFamily: "Nunito",
  },
  title: {
    color: "#66bb6a",
    fontFamily: "Dancing Script",
    fontSize: "40px",
  },
  content: {
    fontFamily: "Nunito",
    fontSize: '18px',
    fontWeight: '700'
  },
}

function validate(name, email, message) {
  // we are going to store errors for all fields
  // in a signle array
  const errors = []

  if (name.length === 0) {
    errors.push("Name can't be empty")
  }

  if (email.length < 5) {
    errors.push("Email should be at least 5 charcters long")
  }
  if (email.split("").filter(x => x === "@").length !== 1) {
    errors.push("Email should contain an @")
  }
  if (email.indexOf(".") === -1) {
    errors.push("Email should contain at least one dot")
  }
  if (message.length === 0) {
    errors.push("Message can't be empty")
  }


  return errors
}

class Contact extends React.Component {

  constructor() {
    super()
    this.state = {
      errors: [],
      open: false,
      success: false,
      fail: false,
      form: {
        name: "",
        email: "",
        company: "",
        message: "",
      },
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleToggle = () => {
    this.setState({
      open: !this.state.open,
    })
  }
  handleSuccess = () => {
    this.setState({
      success: !this.state.success,
    })
  }
  handleFail = () => {
    this.setState({
      fail: !this.state.fail
    })
  }
  handleChange = name => event => {
    this.setState(
      {
        form: {
          ...this.state.form,
          [name]: event.target.value,
        },
      },
      console.log(event.target.value)
    )
  }
  succuss = () => {
    this.handleSuccess()
    this.handleToggle()
    this.resetForm()
  }

  fail = () => {
    this.handleFail()
    this.handleToggle()
    this.resetForm()
  }
  close = () => {
    this.handleToggle()
    this.restErrors()
  }
  handleSubmit = e => {
    e.preventDefault()
    const { form } = this.state
    const {
      form: { name, email, message },
    } = this.state
    const errors = validate(name, email, message)
    if (errors.length > 0) {
      this.setState({ errors })
      return
    }
    axios({
      method: "POST",
      url: "http://localhost:4000/send",
      data: form,
    }).then(response => {
      if (response.data.status === "success") {
        this.succuss()
      } else if (response.data.status === "fail") {
        this.fail()
      }
    })
  }

  resetForm() {
    this.setState({ errors: [], form: { name: "", email: "", company: "", message: "" } })
  }
  restErrors() {
    this.setState({ errors: [] })
  }
  render() {
    const { classes } = this.props
    const {
      errors,
      open,
      success,
      fail,
      form: { name, email, company, message },
    } = this.state
    return (
      <div>
        <Button color="primary" onClick={this.handleToggle}>
          <Box color="background.paper">Contact</Box>
        </Button>
        <Dialog open={open} onClose={this.handleToggle}>
          <DialogTitle id="contact-form">
            <Typography className={classes.title}>Contact</Typography>
          </DialogTitle>
          <DialogContent>
            <DialogContentText className={classes.content} color="secondary">
              Will be very Happy to hear from you, Thanks for contacting me!
            </DialogContentText>
            <form id="contact-form" method="POST">
              {errors.map(error => (
                <SnackbarContent
                  classes={{
                    root: classes.error,
                  }}
                  message={error}
                />
              ))}
              <TextField
                margin="dense"
                id={name}
                label="Name"
                type="text"
                fullWidth
                required
                onChange={this.handleChange("name")}
              />
              <TextField
                margin="dense"
                id={company}
                label="Company/Job"
                type="text"
                fullWidth
                onChange={this.handleChange("company")}
              />
              <TextField
                margin="dense"
                id={email}
                label="Email Address"
                type="email"
                fullWidth
                required
                onChange={this.handleChange("email")}
              />
              <DialogContentText className={classes.email} color="secondary">
                Will only be used to replay to you.
              </DialogContentText>
              <TextField
                multiline
                rows="4"
                margin="dense"
                id={message}
                label="Message"
                type="text"
                fullWidth
                required
                onChange={this.handleChange("message")}
              />
            </form>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.close} color="primary">
              Close
            </Button>
            <Button color="primary" onClick={this.handleSubmit}>
              Send
            </Button>
          </DialogActions>
        </Dialog>
        <div>
          <Snackbar
            ContentProps={{
              classes: {
                root: classes.success,
              },
            }}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            open={success}
            autoHideDuration={6000}
            onClose={this.handleSuccess}
            message="Your message was sent, thanks for contacting..."
            action={
              <Fragment>
                <IconButton
                  size="medium"
                  aria-label="close"
                  onClick={this.handleSuccess}
                >
                  <MdDone fontSize="small" />
                </IconButton>
              </Fragment>
            }
          />
          <Snackbar
            ContentProps={{
              classes: {
                root: classes.fail,
              },
            }}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            open={fail}
            color="primary"
            autoHideDuration={6000}
            onClose={this.handleFail}
            message="Something went wrong, try again please!"
            action={
              <Fragment>
                <IconButton
                  size="medium"
                  aria-label="close"
                  onClick={this.handleFail}
                >
                  <MdSmsFailed fontSize="small" />
                </IconButton>
              </Fragment>
            }
          />
        </div>
      </div>
    )
  }
}
export default withStyles(styles)(Contact)