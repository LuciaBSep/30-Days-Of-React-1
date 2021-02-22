import * as React from "react"

import styles from "./Links.module.scss"

const Links: React.FC = () => {
  return (
    <div className={styles.container}>
      <ul>
        <li>
          <a href="">Home</a>
        </li>
        <li>
          <a href="">About</a>
        </li>
        <li>
          <a href="https://www.google.com.ar">G</a>
        </li>
      </ul>
    </div>
  )
}

export default Links
