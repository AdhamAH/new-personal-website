/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import { MuiThemeProvider, createMuiTheme } from "@material-ui/core"

import Header from "./header"
import "./layout.css"

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#98ee99",
      main: "#66bb6a",
      dark: "#338a3e",
      contrastText: "#fff",
    },
    secondary: {
      light: "#ffd95b",
      main: "#ffa726",
      dark: "#c77800",
      contrastText: "#000",
    },
  },
})
const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
      <MuiThemeProvider theme={theme}>
      <Header siteTitle={data.site.siteMetadata.title} />
    {children}
    </MuiThemeProvider>
  )
      
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
