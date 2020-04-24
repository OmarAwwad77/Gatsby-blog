import React from "react"
import { Link } from "gatsby"
import "../styles/index.scss"
import Head from "../components/head"

import Layout from "../components/layout"

const IndexPage = () => {
  return (
    <Layout>
      <Head title={"index"} />
      <div>Hello World</div>
    </Layout>
  )
}

export default IndexPage
