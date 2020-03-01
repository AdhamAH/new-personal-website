import React, { Fragment } from "react"
import { Container, Typography, Grid } from "@material-ui/core"





export default () => {
    
    return (
      <footer style={{ backgroundColor: '#66bb6a' }}>
        <Grid container direction='column' alignItems='center' >
          <Grid >
            <Typography style={{ color: 'white', padding: '5px', fontFamily: "Nunito" }}>Created using Gatspyjs and Material UI</Typography>
          </Grid>
          <Grid>

            <Typography style={{ color: 'white', fontFamily: "Dancing Script" }}>&copy; AAH!</Typography>
          </Grid>
        </Grid>
      </footer>
    )
    
}