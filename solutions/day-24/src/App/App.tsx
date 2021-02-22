import * as React from "react"
import Header from "../components/Header/Header"
import styles from "./App.module.scss"
import Search from "../components/Search/Search"

const App: React.FC = () => {
  return (
    <main className={styles.container}>
      <Header />
      <h1>Hola</h1>
      <Search />
    </main>
  )
}

export default App
