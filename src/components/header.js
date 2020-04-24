import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import headerStyles from "./header.module.scss"

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <header className={headerStyles.header}>
      <h1>{data.site.siteMetadata.title}</h1>
      <nav>
        <ul>
          <li>
            <Link className={headerStyles.link} to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className={headerStyles.link} to="/blog">
              Blog
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
