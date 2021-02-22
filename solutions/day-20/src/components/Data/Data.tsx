import * as React from "react"
import styles from "./Data.module.scss"

interface Props {
  breeds: number
  weight: number
  life_span: number
}

const Data: React.FC<Props> = ({breeds, weight, life_span}) => {
  return (
    <div className={styles.container}>
      <h2>There are {breeds} cat breeds</h2>
      <p>
        On average a cat can weight about {weight} Kg. and lives {life_span} years
      </p>
    </div>
  )
}

export default Data
