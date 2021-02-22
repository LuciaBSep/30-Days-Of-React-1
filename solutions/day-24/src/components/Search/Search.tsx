import * as React from "react"
import styles from "./Search.module.scss"

const Search: React.FC = () => {
  return (
    <div className={styles.container}>
      <input
        className={styles.search}
        placeholder="Search countries by name, city and languages"
        type="text"
      />
    </div>
  )
}

export default Search
