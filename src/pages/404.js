import React, { Fragment } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"



const NotFoundPage = () => (
  <Fragment>
    <Layout>
      <SEO title="404: Not found" />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h1 style={{ color: "red", padding: "50px" }}>NOT FOUND</h1>
        <p>
          You want to go to a route that doesn&#39;t exist... please, go back.
        </p>
        <Link to="/">Go back to the homepage</Link>
      </div>
    </Layout>
  </Fragment>
)

export default NotFoundPage
