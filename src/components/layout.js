import React from "react"

import Header from "./header"
import Footer from "./footer"
import styles from "./layout.module.scss"

const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Header />
        {children}
      </div>
      <Footer />
    </div>
  )
}

export default Layout
