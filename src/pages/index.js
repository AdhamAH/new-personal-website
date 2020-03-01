import React from "react"
import { MuiThemeProvider, createMuiTheme} from "@material-ui/core";
import Layout from "../components/layout"
// import SEO from "../components/seo"
import HomePage from '../components/about'
import Projects from '../components/projects'
import Tools from '../components/tools'
import Footer from '../components/footer'

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

const IndexPage = () => (
    <Layout>
      <HomePage />
      <Projects />
    <Tools />
    <Footer/>
    </Layout>
)

export default IndexPage
