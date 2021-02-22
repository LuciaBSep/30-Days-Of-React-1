import * as React from "react"
import styles from "./Header.module.scss"
import icon from "../../assets/icon.ico"

interface Props {
  title: string
}

const Header: React.FC<Props> = ({title, children}) => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>{title}</h1>
        <img src={icon}></img>
        {children}
      </header>
    </div>
  )
}

export default Header
