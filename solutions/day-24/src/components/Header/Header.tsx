import * as React from "react"

import styles from "./Header.module.scss"

const Header: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1>World Countries Data</h1>
      <h3>Currently, we have 250 countries</h3>
    </div>
  )
}

export default Header
